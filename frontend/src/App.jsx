import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import UpdatePassword from "./components/User/UpdatePassword";
import UserProfile from "./components/User/UserProfile";
import { getUserFromStorage } from "./utils/getUserFromStorage";
import { useSelector } from "react-redux";

export default function App() {
  //get the token
  // const token = getUserFromStorage();
  // console.log(token?.token);

  //useSelector using hook - react redux
  const user = useSelector((state) => state?.auth?.user);
  console.log(user);
  return (
    <>
      <BrowserRouter>
        {user ? <PrivateNavbar /> : <PublicNavbar />}

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
