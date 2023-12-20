import logo from "./logo.svg";
import "./App.css";
import Assessment from "./pages/Assessment";
import Dashboard from "./pages/Dashboard";
import Appbar from "./components/Appbar";
// import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import ProfilePage from "./pages/ProfilePage";
import SideBar from "./components/Sidebar/SideBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Announcement from "./pages/Announcement";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import "./css/App.css";
import { useEffect, useState } from "react";
import { useAuth } from "./context/AuthContext";
import AllCourses from "./pages/Courses";
// import AdminDashboard from "./pages/AdminDashboard";
import { useNavigate } from "react-router-dom";
import RequireAuth from "./pages/RequireAuth";
import RichTextEditor from "./pages/RichTextEditor";
import Analytics from "./pages/Analytics";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState();
  const {user} = useAuth();
  console.log('user', user)
  // const nav = useNavigate();

  // useEffect(() => {
  //   const userIsLoggedIn = localStorage.getItem("loggedIn") === "true";
  //   if (userIsLoggedIn) {
  //     setLoggedIn(true);
  //   }
  // }, []);


  return (
    <div>
      <Router>
        <SideBar>
          <Appbar />
          <Routes>
            {/* <Route
            path="/"
            element={
              <ProtectedRoute
                element={<Dashboard />}
                authenticated={loggedIn}
                redirectPath="/login"
              />
            }
          ></Route> */}

          {/* <Route path="/" element={<RequireAuth></RequireAuth>} /> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings/profile" element={<ProfilePage />} />
            {/* <Route path="/home" element={<Home />} /> */}
            
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/assessment" element={<Assessment />} />

            <Route path="/login" element={<UserLogin />} />
            <Route path="/courses" element={<AllCourses />} />

            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* <Route path="/admin/create-user" element={<AdminDashboard />} /> */}

            <Route path="/RichTextEditor" element={<RichTextEditor/>} />
            <Route path="/Analytics" element={<Analytics/>} />

            {/* 404 not found */}
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>

      {/* {loggedIn && ( */}
      {/* )} */}
    </div>
  );
}

export default App;
