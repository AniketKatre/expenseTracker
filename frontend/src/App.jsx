import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import UpdatePassword from "./components/User/UpdatePassword";
import UserProfile from "./components/User/UserProfile";
import AddCategory from "./components/Category/AddCategory";
import { getUserFromStorage } from "./utils/getUserFromStorage";
import { useSelector } from "react-redux";
import CategoriesList from "./components/Category/CategoryList";
import UpdateCategory from "./components/Category/UpdateCategory";
import TransactionForm from "./components/Transaction/TransactionForm";
import Dashboard from "./components/User/Dashboard";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Footer from "./components/Home/Footer";

export default function App() {
  //get the token
  // const token = getUserFromStorage();
  // console.log(token?.token);

  //useSelector using hook - react redux
  const user = useSelector((state) => state?.auth?.user);
  // console.log(user);
  return (
    <>
      <BrowserRouter>
        {user ? <PrivateNavbar /> : <PublicNavbar />}

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/add-category" element={<AddCategory />} />
          <Route path="/categories" element={<CategoriesList />} /> */}

          {/* private/protected Routes */}

          <Route
            path="/add-category"
            element={
              <AuthRoute>
                <AddCategory />
              </AuthRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <AuthRoute>
                <CategoriesList />
              </AuthRoute>
            }
          />
          <Route
            path="/update-category/:id"
            element={
              <AuthRoute>
                <UpdateCategory />
              </AuthRoute>
            }
          />
          <Route
            path="/add-transaction"
            element={
              <AuthRoute>
                <TransactionForm />
              </AuthRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AuthRoute>
                <Dashboard />
              </AuthRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthRoute>
                <UserProfile />
              </AuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
