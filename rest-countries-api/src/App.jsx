import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CountryDetails from "./pages/CountryDetails/CountryDetails"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/country/:name"
        element={<CountryDetails />}
      />
    </Routes>
  );
}

export default App;