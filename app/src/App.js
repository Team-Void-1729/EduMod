import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/Dashboard";
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
          </Routes>
        </SideBar>
      </Router>
    </div>
  );
}

export default App;
