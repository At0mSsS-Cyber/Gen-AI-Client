import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginGuest } from "../../store/authSlice";
import { loginApi } from "../../services/authAPI";
import LoginForm from "./LoginForm";
import LoginButton from "./LoginButton";
import GuestButton from "./GuestButton";
import { RootState } from "../../store";

const Login: React.FC = () => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async () => {
    const response = await loginApi(username, password);
    if (response.username) {
      dispatch(loginSuccess());
      navigate("/");
    }
  };

  const handleGuestLogin = () => {
    dispatch(loginGuest());
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <LoginForm
        username={username}
        password={password}
        onUsernameChange={(e) => setUsername(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton onClick={handleLogin} />
      <GuestButton onClick={handleGuestLogin} />
    </div>
  );
};

export default Login;
