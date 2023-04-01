import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LegendProps,
  Legend,
} from 'recharts';
import PropTypes from 'prop-types';
import { IActivity } from 'types';

interface IActivityProps {
  sessions: IActivity[];
}

interface ITooltipProps {
  active: boolean;
  payload: Array<{ value: number }>;
  contentStyle: { [key: string]: string };
  itemStyle: { [key: string]: string };
}

/**
 * return a customized style of tooltip
 * @param Object - data to customize the chart
 * @returns JSX element to render the custom tooltip
 */
function CustomTooltip({
  active,
  payload,
  contentStyle,
  itemStyle,
}: ITooltipProps) {
  if (active && payload) {
    return (
      <div style={contentStyle}>
        <p style={itemStyle}>{payload[0].value}kg</p>
        <p style={itemStyle}>{payload[1].value}kcal</p>
      </div>
    );
  }
  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
  contentStyle: PropTypes.shape({}),
  itemStyle: PropTypes.shape({}),
};

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
  contentStyle: {},
  itemStyle: {},
};

/**
 * return a customized style of legend
 * @param payload - array of the payload of the legend
 * @returns JSX element to render the custom legend
 */
function RenderLegend({ payload }: LegendProps) {
  if (payload) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '1rem 2rem 4rem',
          fontSize: '14px',
        }}
      >
        <span
          style={{
            color: '#20253A',
            listStyleImage: 'url("../../../assets/circle-kg.svg")',
          }}
        >
          Activité quotidienne
        </span>
        <ul style={{ display: 'flex', gap: '2rem' }}>
          <li
            style={{
              color: '#74798C',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <svg width="10" height="10">
              <circle cx="5" cy="5" r="4" fill={payload[0].color} />
            </svg>
            Poids (kg)
          </li>
          <li
            style={{
              color: '#74798C',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <svg width="10" height="10">
              <circle cx="5" cy="5" r="4" fill={payload[1].color} />
            </svg>
            Calories brûlées (kcal)
          </li>
        </ul>
      </div>
    );
  }
  return null;
}

RenderLegend.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
    })
  ),
};

RenderLegend.defaultProps = {
  payload: [],
};

/**
 * React component to display the daily activity in a bar chart
 * @param sessions - data from the api to display in the bar chart ( weight and calories burned per day)
 * @returns JSX.Element that is a barChart with a custom tooltip and legend that displays the user's daily activity
 */
function DailyActivity({ sessions }: IActivityProps): JSX.Element {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={2.8}>
      <BarChart data={sessions}>
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          x={50}
          width={675}
        />
        <XAxis
          dataKey="day"
          width={7}
          tick={{ stroke: '#9b9eac' }}
          tickFormatter={(str) => str.slice(-1)}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          yAxisId="left"
          dataKey="kilogram"
          domain={[70, 'dataMax']}
          orientation="right"
          tick={{ stroke: '#9b9eac' }}
          axisLine={false}
          tickLine={false}
          tickCount={3}
        />
        <YAxis
          yAxisId="right"
          dataKey="calories"
          // domain={[0, 'auto']}
          axisLine={false}
          tickLine={false}
          hide
        />
        <Tooltip
          wrapperStyle={{ top: -30, left: 10 }}
          contentStyle={{
            padding: '0.4rem',
            backgroundColor: '#e60000',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
          itemStyle={{ color: 'white', fontSize: 7 }}
          content={<CustomTooltip />}
        />
        <Legend verticalAlign="top" content={<RenderLegend />} />
        <Bar
          yAxisId="left"
          dataKey="kilogram"
          fill="#282d30"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          yAxisId="right"
          dataKey="calories"
          fill="#e60000"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
DailyActivity.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }).isRequired
  ),
};
DailyActivity.defaultProps = {
  sessions: [],
};
export default DailyActivity;
