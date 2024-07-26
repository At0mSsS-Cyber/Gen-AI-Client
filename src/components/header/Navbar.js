import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";

const NavComponent = ({ navClass, linkClassName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className={navClass}>
      {[
        ["SQL Analyzer", "SQL-Analyze-AI"],
        ["Article Analyzer", "blog-Analyze-AI"],
      ].map(([section, path], index) => (
        <Link to={path} key={index} className={linkClassName} >
          {section}
        </Link>
      ))}
      <div>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <div>
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 mr-2"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 bg-green-700 rounded hover:bg-green-800"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default NavComponent;
