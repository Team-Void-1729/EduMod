import logo from './logo.svg';
import './App.css';
import Assessment from "./pages/Assessment";
import Dashboard from "./pages/Dashboard";
import Appbar from './components/Appbar';
import Profile from "./components/Profile";
import SideBar from "./components/Sidebar/SideBar";
import Announcement from "./pages/Announcement";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './css/App.css';
function App() {
  return (
    <div >
      <Router>
        <SideBar>
            <Appbar />
          <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Profile/profile" element={<Profile />} />
            <Route path="/Announcement" element={<Announcement/>}/>
            <Route path="/Assessment" element={<Assessment/>}/>
            {/* 404 not found */}
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </div>
  );
}

export default App;
