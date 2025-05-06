import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from '../../Frontend/src/context/AuthContext';
import { Landing } from '../../Frontend/src/pages/Landing';
import { Dashboard } from '../../Frontend/src/pages/Dashboard';
import { Login } from '../../Frontend/src/pages/Login';
import { SignUp } from '../../Frontend/src/pages/Signup';

// function PrivateRoute({ children }: { children: React.ReactNode }) {
//   const { session } = useAuth();
//   return session ? <>{children}</> : <Navigate to="/login" />;
// }

function App() {
  return (
    // <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
             
                <Dashboard />
              
            }
          />
        </Routes>
      </Router>
    // </AuthProvider>
  );
}

export default App;