import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import UseRef from "./learn/react/ref"
import UseQuery from "./learn/react/useQuery"
import Home from "./page/home"
import Dashboard from "./components/dashboard";

function App() {
  const isAuthenticated = true; // Ví dụ: trạng thái đăng nhập của người dùng

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usequery" element={<UseQuery />} />
        <Route path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} />} />
      </Routes>
    </Router>

  )
}

export default App
