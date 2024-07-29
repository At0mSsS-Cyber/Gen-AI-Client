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
  const [isError, setIsError] = React.useState<boolean>(false);
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
    try {
      const response = await loginApi(username, password);
      if (response.username) {
        dispatch(loginSuccess());
        navigate("/");
      } else {
        console.log(response);
      }
    } catch (err) {
      setIsError(true);
      console.error(err);
    }
  };

  const handleGuestLogin = () => {
    dispatch(loginGuest());
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2 min-h-screen bg-customBrown">
      <LoginForm
        username={username}
        password={password}
        isError={isError}
        onUsernameChange={(e) => (
          setUsername(e.target.value), setIsError(false)
        )}
        onPasswordChange={(e) => (
          setPassword(e.target.value), setIsError(false)
        )}
      />
      <div className="pt-4 space-y-2">
        <LoginButton
          onClick={handleLogin}
          isDisabled={!username || !password}
        />
        <GuestButton onClick={handleGuestLogin} />
      </div>
    </div>
  );
};

export default Login;
