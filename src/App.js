import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Users from './pages/Users';
import Repeter from './pages/Repeter';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <BrowserRouter>
      <Header toggleSidebar={toggleSidebar} />
      <div className={`main ${isSidebarOpen ? 'main-open' : 'main-closed'}`}>
        <div className="sidebarWrapper">
          <Sidebar />
        </div>
        <div className="contentWrapper">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/repeter" element={<Repeter />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
