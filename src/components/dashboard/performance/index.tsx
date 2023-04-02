import { IUserPerformanceData } from 'types';
import PropTypes from 'prop-types';

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';

interface IPerformanceProps {
  performance: IUserPerformanceData;
}

/**
 * React component to display user performance in a radar chart
 * @param performance - user performance data
 * @returns JSX.Element that is a radarChart to display user performance
 */
function Performance({ performance }: IPerformanceProps) {
  const frenchKind = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Force',
    4: 'Endurance',
    5: 'Energie',
    6: 'Cardio',
  };
  const kind = { ...frenchKind };
  Object.assign(performance?.kind || {}, kind);
  return (
    <ResponsiveContainer width="100%" aspect={0.98}>
      <RadarChart cx="50%" cy="50%" data={performance?.data} outerRadius="55%">
        <PolarGrid radialLines={false} stroke="white" />
        <PolarAngleAxis
          dataKey="kind"
          type="category"
          style={{ fontSize: '12px', textTransform: 'capitalize' }}
          tick={{ fill: 'white' }}
          tickFormatter={(_, index) => performance?.kind[index + 1]}
        />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
Performance.propTypes = {
  performance: PropTypes.shape({
    kind: PropTypes.shape({
      key: PropTypes.number,
      value: PropTypes.string,
    }),
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number,
      })
    ),
  }).isRequired,
};
export default Performance;
