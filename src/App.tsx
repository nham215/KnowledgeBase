import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import UseRef from "./learn/react/ref"
import UseQuery from "./learn/react/useQuery"
import Home from "./page/home"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usequery" element={<UseQuery />} />
      </Routes>
    </Router>

  )
}

export default App
