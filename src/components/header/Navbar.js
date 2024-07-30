import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import Button from "@mui/material/Button";

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
        ["Blog Research Tool", "blog-Analyze-AI"],
      ].map(([section, path], index) => (
        <Link to={path} key={index} className={linkClassName}>
          {section}
        </Link>
      ))}
      <div className="flex justify-center items-center space-y-2">
        {isAuthenticated ? (
          <Button
            type="button"
            color="error"
            variant="text"
            onClick={handleLogout}
            className="px-4 py-2 text-red-500 rounded hover:text-red-600"
          >
            Logout
          </Button>
        ) : (
          <div className={linkClassName}>
            <Button
              type="button"
              variant="contained"
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 mr-2"
            >
              Login
            </Button>
            {/* <Button
              type="button"
              variant="contained"
              onClick={() => navigate("/signup")}
              className="px-4 py-2 bg-green-700 rounded hover:bg-green-800"
            >
              Sign Up
            </Button> */}
          </div>
        )}
      </div>
    </nav>
  );
};
export default NavComponent;
