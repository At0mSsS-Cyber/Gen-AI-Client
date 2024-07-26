import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Blog from "./screens/blog-analyzer";
import SQL from "./screens/sql-query-generator";
import Login from "./screens/auth/Login";
import { RootState } from "./store";
import { loginSuccess } from "./store/authSlice";
import Layout from "./layout/Layout";
import Home from "./screens/home";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const isGuest = useSelector(
    (state: RootState) => state.auth.isGuest
  );
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      dispatch(loginSuccess());
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes */}
        <Route element={<Layout />}>
          <Route
            path="/Blog-Analyze-AI"
            element={
              isAuthenticated || isGuest ? <Blog /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/SQL-Analyze-AI"
            element={
              isAuthenticated || isGuest ? <SQL /> : <Navigate to="/login" />
            }
          />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
