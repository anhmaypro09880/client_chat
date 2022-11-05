import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";
import Register from "./pages/Register";
import RePassword from "./pages/RePassword";
import AppProvider from "./context/AppProvider";
import InfoUserModal from "./components/Modals/InfoUserModal";
import UpdateInfoUserModal from "./components/Modals/UpdateInfoUserModal";
import AddUserModal from "./components/Modals/AddUserModal";
import AddGroupModal from "./components/Modals/AddGroupModal";

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<RePassword />} path="/repassword" />
          <Route element={<ChatRoom />} path="/" />
        </Routes>
        <InfoUserModal />
        <UpdateInfoUserModal />
        <AddUserModal />
        <AddGroupModal />
      </AppProvider>
    </Router>
  );
}

export default App;