import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import UseRef from "./learn/react/ref"
import UseQuery from "./learn/react/useQuery"
import Home from "./page/home"
import Dashboard from "./components/dashboard";
import MouseTracker from "./learn/react/RenderProps";

function App() {
  const isAuthenticated = true; // Ví dụ: trạng thái đăng nhập của người dùng

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usequery" element={<UseQuery />} />
        <Route path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} />} />
        <Route path="/rederprops" element={<MouseTracker render={(mouse) => (
          <p>
            Mouse position: ({mouse.x}, {mouse.y})
          </p>
        )} />} />
      </Routes>
    </Router>

  )
}

export default App
