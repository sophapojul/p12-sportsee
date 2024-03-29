import PropTypes from 'prop-types';
import { Cell, Pie, PieChart, Legend, ResponsiveContainer } from 'recharts';
import { IUserMainData } from 'types';

interface IScoreProps {
  todayScore: IUserMainData['score'] | IUserMainData['todayScore'];
}

interface ICustomizedLabelProps {
  /**
   * The x coordinate of the center of the chart.
   */
  cx: number;
  /**
   * The y coordinate of the center of the chart.
   */
  cy: number;
  /**
   * The percentage of the current value compared to the total value.
   */
  percent: number;
  /**
   * The value of the current label
   * */
  value: number;
}
interface ICustomizedLegendProps {
  payload: { value: string }[];
}

/**
 * return a customized label
 * @param props - props of the customized label
 * @returns svg text with the customized label
 */
function CustomizedLabel(props: ICustomizedLabelProps) {
  const { cx, cy, percent, value } = props;
  return (
    <text
      x={cx}
      y={cy}
      fill="#000"
      textAnchor="middle"
      style={{ fontSize: 'clamp(1rem, 2vw, 2rem)', lineHeight: 26 }}
    >
      {`${(percent * value * 100).toFixed(0)}%`}
      <tspan x={cx} dy="1.2em" style={{ fontSize: 16, fill: '#74798c' }}>
        de votre
      </tspan>
      <tspan x={cx} dy="1.2em" style={{ fontSize: 16, fill: '#74798c' }}>
        objectif{' '}
      </tspan>
    </text>
  );
}

/**
 * return a customized legend
 * @param payload - array of data of the legend
 * @returns a customized legend as React component
 */
function CustomizedLegend({ payload }: ICustomizedLegendProps) {
  return (
    <p
      style={{
        color: 'black',
        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
        marginTop: 'clamp(0.5rem, 1.5vw, 3rem)',
        marginLeft: 'clamp(0.5rem, 1.2vw, 3rem)',
      }}
    >
      {payload[1].value}
    </p>
  );
}

CustomizedLegend.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
    }).isRequired
  ),
};

CustomizedLegend.defaultProps = {
  payload: [{ value: 'Score' }],
};

/**
 * React component to display the user's score in a pie chart
 * The function Score() returns a PieChart component
 * @returns JSX.Element that is a pieChart with customized label and legend from user's data
 */
function Score({ todayScore }: IScoreProps) {
  const data = [{ name: 'Score', value: todayScore }];
  return (
    <ResponsiveContainer width="100%" aspect={0.98}>
      <PieChart>
        <Pie
          data={[{ name: 'A', value: 1 }]}
          dataKey="value"
          outerRadius={60}
          stroke="none"
        >
          <Cell fill="white" />
        </Pie>
        <Pie
          data={data}
          dataKey="value"
          startAngle={90}
          endAngle={todayScore && 360 * todayScore + 90}
          innerRadius={60}
          outerRadius={70}
          fill="#ff0000"
          cornerRadius={5}
          stroke="none"
          labelLine={false}
          label={CustomizedLabel}
        >
          <Cell fill="red" />
        </Pie>
        <Legend
          align="left"
          verticalAlign="top"
          content={<CustomizedLegend />}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
Score.propTypes = {
  todayScore: PropTypes.number.isRequired,
};
export default Score;
