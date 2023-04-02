import PropTypes from 'prop-types';
import { ISessionsAverage } from 'types';
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import numberDayToLetterDay from 'utils/numberDayToLetterDay';

interface IAverageSessionsProps {
  sessions: ISessionsAverage[];
}
interface ITooltipProps {
  active: boolean;
  payload: Array<{ value: number }>;
}

/**
 * return a customized style of tooltip
 * @param active - boolean if the tooltip is active
 * @param payload - array of data to display in the tooltip
 * @returns JSX.Element to render a custom tooltip
 */
function CustomTooltip({ active, payload }: ITooltipProps) {
  if (active && payload) {
    return (
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.1)',
          padding: '10px',
          borderRadius: '5px',
          height: '100%',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <p
          style={{
            backgroundColor: 'white',
            fontSize: '8px',
            padding: '0.4rem',
          }}
        >{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
};

CustomTooltip.defaultProps = {
  payload: [],
};

/**
 * return a customized style of legend
 * @returns a customized style of legend
 */
function renderLegend() {
  return (
    <p
      style={{
        color: 'white',
        fontSize: '15px',
        marginInline: '4rem',
        marginTop: '1rem',
      }}
    >
      Durée moyenne des sessions
    </p>
  );
}

/**
 * React component to display the average length of the user's sessions in a line chart
 * @param sessions - user's data to display in the chart ( day and length of the sessions)
 * @returns a chart with a custom tooltip and legend that displays the average length of the user's sessions and custom legend and
 */
function AverageSessions({ sessions }: IAverageSessionsProps) {
  const data = sessions.map((session) => {
    return {
      ...session,
      day: numberDayToLetterDay(session.day),
    };
  });
  return (
    <ResponsiveContainer width="100%" aspect={0.98}>
      <LineChart
        data={data}
        width={800}
        margin={{
          left: -55,
          bottom: 10,
        }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          style={{ fontSize: '12px' }}
          tick={{ fill: 'white' }}
          padding={{ left: 8, right: 15 }}
        />
        <YAxis
          axisLine={false}
          tick={false}
          allowDataOverflow
          domain={[0, 'dataMax - 50']}
        />
        <Tooltip
          content={<CustomTooltip active={false} payload={[{ value: 0 }]} />}
          wrapperStyle={{ bottom: '10px' }}
          position={{ y: 0 }}
          offset={0}
        />

        <Line
          type="basis"
          dataKey="sessionLength"
          stroke="#fff"
          strokeWidth={2}
          activeDot={{ strokeWidth: 5 }}
          dot={false}
          isAnimationActive
          connectNulls
        />
        <Legend content={renderLegend} verticalAlign="top" align="left" />
      </LineChart>
    </ResponsiveContainer>
  );
}
AverageSessions.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
};
export default AverageSessions;
