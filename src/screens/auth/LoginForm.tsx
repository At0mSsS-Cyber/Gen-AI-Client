import React from 'react';

interface LoginFormProps {
  username: string;
  password: string;
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange
}) => {
  return (
    <div className="w-full max-w-xs p-4 bg-white rounded shadow-md">
      <h1 className="mb-4 text-2xl font-bold text-center">Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={onUsernameChange}
        className="w-full p-2 mb-2 border border-gray-400 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        className="w-full p-2 mb-4 border border-gray-400 rounded"
      />
    </div>
  );
};

export default LoginForm;
