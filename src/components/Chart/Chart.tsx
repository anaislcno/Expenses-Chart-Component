import "./Chart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "./../../../data/data.json";

interface ChartProps {
  day: string;
  amount: number;
}

const currentDay = new Date()
  .toLocaleDateString("en-US", { weekday: "short" })
  .toLowerCase();
console.log(currentDay);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="tooltip">
        <p>{`$${data.amount}`}</p>
      </div>
    );
  }
  return null;
};

const Chart = () => {
  const chartData: ChartProps[] = data;

  return (
    <div className="chart__container">
      <ResponsiveContainer height={225}>
        <BarChart data={chartData} barCategoryGap={10}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94867a", fontSize: 14, fontWeight: "400" }}
          />
          <YAxis hide={true} />
          <Tooltip content={CustomTooltip} />
          <Bar dataKey="amount" fill="#ed765e" radius={[5, 5, 5, 5]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
