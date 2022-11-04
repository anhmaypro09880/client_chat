import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";
import Register from "./pages/Register";
import RePassword from "./pages/RePassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<RePassword />} path="/repassword" />
        <Route element={<ChatRoom />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
