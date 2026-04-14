import ExpensesChart from "./features/expenses/components/ExpensesChart";
import BalanceCard from "./features/expenses/components/BalanceCard";

function App() {
  return (
    <div className="app">
      <BalanceCard />
      <ExpensesChart />
    </div>
  );
}

export default App;
