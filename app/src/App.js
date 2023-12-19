import logo from "./logo.svg";
import "./App.css";
import Assessment from "./pages/Assessment";
import Dashboard from "./pages/Dashboard";
import Appbar from "./components/Appbar";
import Home from "./pages/Home";
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const auth = useAuth();

  // useEffect(() => {
  //   const userIsLoggedIn = localStorage.getItem("loggedIn") === "true";
  //   if (userIsLoggedIn) {
  //     setLoggedIn(true);
  //   }
  // }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                element={<Dashboard />}
                authenticated={loggedIn}
                redirectPath="/login"
              />
            }
          ></Route>
          <Route path="/settings/profile" element={<ProfilePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/assessment" element={<Assessment />} />

          <Route path="/login" element={<UserLogin />} />

          {/* 404 not found */}
          <Route path="*" element={<> not found</>} />
        </Routes>
      </Router>

      {loggedIn && (
        <SideBar>
          <Appbar />
        </SideBar>
      )}
    </div>
  );
}

export default App;
