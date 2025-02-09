import React, { JSX } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main/Main.tsx";
import Login from "./Pages/Login/Login.tsx";
import { useAuth } from "./context/AuthContext.tsx";

const App: React.FC = () => {
  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

const AppWrapper: React.FC = () => <App />;

export default AppWrapper;
