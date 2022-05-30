import "./App.css";
import SignInSide from "./pages/SignInSide";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignInSide />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
