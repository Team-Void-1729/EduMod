import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Profile from "./components/Profile";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './css/App.css';
function App() {
  return (
    <div >
      <Router>
        <SideBar>
          <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/profile" element={<Profile />} />
            {/* 404 not found */}
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </div>
  );
}

export default App;
