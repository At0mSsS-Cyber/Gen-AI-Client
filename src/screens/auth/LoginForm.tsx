import React from "react";
import { TextField } from "@mui/material";

interface LoginFormProps {
  username: string;
  password: string;
  isError: boolean;
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  isError,
}) => {
  return (
    <div className="w-full max-w-xs">
      <h1 className="mb-4 text-2xl font-bold text-center">Login</h1>
      <div className="space-y-2">
        <TextField
          type="text"
          id="username-field"
          variant="outlined"
          label="Username"
          error={isError}
          helperText={isError && "Username or password is wrong !"}
          value={username}
          onChange={onUsernameChange}
          className="w-full p-2 mb-2 border border-gray-400 rounded"
        />
        <TextField
          type="password"
          id="passwors-field"
          variant="outlined"
          label="Password"
          value={password}
          onChange={onPasswordChange}
          className="w-full p-2 mb-4 border border-gray-400 rounded"
        />
      </div>
    </div>
  );
};

export default LoginForm;
