
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Destination from "./pages/Destination/Destination"
import Crew from "./pages/Crew/Crew"
import Technology from "./pages/Technology/Technology"
import Attribution from "./components/Attribution/Attribution"

function AppLayout() {
  const location = useLocation()

  const pageClass =
    location.pathname === "/"
      ? "app-home"
      : `app-${location.pathname.slice(1)}`
  console.log(location.pathname, pageClass)

  return (
    <div className={`app ${pageClass}`}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>

      <Attribution />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
