import React from 'react';
import { Button } from '@mui/material';

interface LoginButtonProps {
  onClick: () => void;
  isDisabled: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick, isDisabled }) => {
  return (
    <Button
      onClick={onClick}
      type='button'
      variant='contained'
      disabled={isDisabled}
      className="w-full p-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-600"
    >
      Login
    </Button>
  );
};

export default LoginButton;
