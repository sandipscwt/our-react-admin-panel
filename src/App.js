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
import { login } from './store/authSlice';  // Import login action

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Access login state from Redux
  const dispatch = useDispatch();  // Access dispatch to trigger actions

  // Function to handle login
  const handleLogin = () => {
    dispatch(login());
  };

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      <div className={`main ${isSidebarOpen ? 'main-open' : 'main-closed'} ${isAuthenticated ? 'withLoginMain' : 'withoutLoginMain'}`}>
        {isAuthenticated && (
          <>
            <Header toggleSidebar={toggleSidebar} />
            <div className="sidebarWrapper">
              <Sidebar />
            </div>
          </>
        )}

        <div className={`contentWrapper ${isAuthenticated ? 'withLogin' : 'withoutLogin'}`}>
          <Routes>
            {/* Public route for login */}
            <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />} />

            {/* Protected routes */}
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
            <Route path="/repeter" element={<ProtectedRoute><Repeter /></ProtectedRoute>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
