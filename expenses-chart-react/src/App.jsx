import ExpensesChart from "./features/expenses/components/ExpensesChart";
import BalanceCard from "./features/expenses/components/BalanceCard";

function App() {
  return (
    <div className="app">
      <BalanceCard />
      <ExpensesChart />
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/sylcym/frontend-mentor-challenges/tree/main/interactive-comments"
          target="_blank"
          rel="noreferrer"
        >
          sylcym
        </a>
        .
      </div>
    </div>
  );
}

export default App;
