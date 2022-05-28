import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import AddAReview from "./Pages/Dashboard/AddAReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Home from "./Pages/Home/Home/Home";
import Purchase from "./Pages/Home/Purchase/Purchase";
import Login from "./Pages/Login/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import PageNotFound from "./Pages/Shared/PageNotFound/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllUsers from "./Pages/Dashboard/AllUsers";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";

function App() {
  const [displayName, setDisplayName] = useState("");
  const getName = (name) => {
    setDisplayName(name);
  };
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header displayName={displayName} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/signup" element={<SignUp getName={getName} />} />

        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />}></Route>
          <Route path="review" element={<AddAReview />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
