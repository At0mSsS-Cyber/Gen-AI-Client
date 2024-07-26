import React from 'react';

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-600"
    >
      Login
    </button>
  );
};

export default LoginButton;
