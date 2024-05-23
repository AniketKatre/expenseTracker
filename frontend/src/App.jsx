import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import UpdatePassword from "./components/User/UpdatePassword";
import UserProfile from "./components/User/UserProfile";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <PublicNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/change-password" element={<UpdatePassword />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
