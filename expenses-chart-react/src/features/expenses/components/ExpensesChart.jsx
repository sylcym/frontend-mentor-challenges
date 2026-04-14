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
  const [data, setData] = useState([]);
  const order = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

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


  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Spending - Last 7 days</h2>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer>
          <BarChart data={formatChartData(data)} barCategoryGap={20}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#92857A", fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="amount">
              {formatChartData(data).map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.day === getToday()
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
          <h3 className={styles.summaryAmount}>$478.33</h3>
        </div>

        <div className={styles.summaryRight}>
          <p className={styles.percent}>+2.4%</p>
          <p className={styles.fromLast}>from last month</p>
        </div>
      </div>
    </div>
  );
}