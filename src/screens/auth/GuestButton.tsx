import React from 'react';
import { Button } from '@mui/material';
interface GuestButtonProps {
  onClick: () => void;
}

const GuestButton: React.FC<GuestButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant='text'
      type="button"
      color="secondary"
      className="w-full p-2 rounded"
    >
      Continue as Guest
    </Button>
  );
};

export default GuestButton;
