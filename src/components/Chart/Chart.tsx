import "./Chart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useEffect, useState } from "react";
import data from "./../../../data/data.json";

interface ChartProps {
  day: string;
  amount: number;
}

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
  const [barCategoryGap, setBarCategoryGap] = useState(10);
  const [radius, setRadius] = useState<[number, number, number, number]>([
    5, 5, 5, 5,
  ]);

  useEffect(() => {
    const handleResize = () => {
      const mq = window.matchMedia("(max-width: 768px)");
      if (mq.matches) {
        setBarCategoryGap(5);
        setRadius([3, 3, 3, 3]);
      } else {
        setBarCategoryGap(10);
        setRadius([5, 5, 5, 5]);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentDay = new Date()
    .toLocaleDateString("en-US", { weekday: "short" })
    .toLowerCase();
  console.log(currentDay);

  return (
    <div className="chart__container">
      <ResponsiveContainer height={180}>
        <BarChart data={chartData} barCategoryGap={barCategoryGap}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94867a", fontSize: 14, fontWeight: "400" }}
          />
          <YAxis hide={true} />
          <Tooltip content={CustomTooltip} />
          <Bar dataKey="amount" radius={radius}>
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  entry.day === currentDay && entry.amount > 0
                    ? "#75b6bd"
                    : "#ed765e"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
