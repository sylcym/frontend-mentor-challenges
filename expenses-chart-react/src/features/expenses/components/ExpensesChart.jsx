import { useEffect, useState } from "react";
import CustomTooltip from "./CustomTooltip";
import styles from "./ExpensesChart.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,

} from "recharts";
import { Cell } from "recharts";

export default function ExpensesChart() {
  const order = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const [data, setData] = useState([]);
  const total = getTotal(data);
  const percent = getPercentChange(formatChartData(data));
  const formattedPercent = percent.toFixed(1);
  const chartData = formatChartData(data);
  const today = getToday();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  function formatChartData(data) {
    return [...data]
      .sort((a, b) => order.indexOf(a.day) - order.indexOf(b.day))
      .map((item) => ({
        day: item.day,
        amount: item.amount,
      }));
  }
  function getToday() {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return days[new Date().getDay()];
  }
  function getTotal(data) {
    return data.reduce((sum, item) => sum + item.amount, 0);
  }

  function getPercentChange(data) {
    if (data.length < 2) return 0;

    const mid = Math.floor(data.length / 2);

    const firstHalf = data.slice(0, mid);
    const secondHalf = data.slice(mid);

    const sum = (arr) =>
      arr.reduce((acc, item) => acc + item.amount, 0);

    const firstTotal = sum(firstHalf);
    const secondTotal = sum(secondHalf);

    if (firstTotal === 0) return 0;

    return ((secondTotal - firstTotal) / firstTotal) * 100;
  }


  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Spending - Last 7 days</h2>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#92857A", fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="amount">
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.day === today
                      ? "var(--cyan)"
                      : "var(--red)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.summary}>
        <div>
          <p className={styles.summaryText}>Total this month</p>
          <h3 className={styles.summaryAmount}>
            ${total.toFixed(2)}
          </h3>
        </div>

        <div className={styles.summaryRight}>
          <p className={styles.percent}>
            {percent >= 0 ? "+" : ""}
            {formattedPercent}%
          </p>
          <p className={styles.fromLast}>from last month</p>
        </div>
      </div>
    </div>
  );
}