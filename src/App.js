import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Users from './pages/Users';
import Repeter from './pages/Repeter';
import Login from './pages/Login';
import { login, logout } from './store/authSlice';  // Import login/logout actions

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Access login state from Redux
  const dispatch = useDispatch();  // Access dispatch to trigger actions

  // Function to handle login
  const handleLogin = () => {
    dispatch(login());
  };

  // Protected route component
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      {isAuthenticated && (
        <>
          <Header toggleSidebar={toggleSidebar} />
          <div className={`main ${isSidebarOpen ? 'main-open' : 'main-closed'}`}>
            <div className="sidebarWrapper">
              <Sidebar />
            </div>
            <div className="contentWrapper">
              <Routes>
                <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
                <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
                <Route path="/users" element={<ProtectedRoute element={<Users />} />} />
                <Route path="/repeter" element={<ProtectedRoute element={<Repeter />} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
      <Routes>
        {/* If already authenticated, redirect from login to dashboard */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
