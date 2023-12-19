import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
