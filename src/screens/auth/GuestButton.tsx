import React from 'react';

interface GuestButtonProps {
  onClick: () => void;
}

const GuestButton: React.FC<GuestButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-2 text-white bg-gray-500 rounded hover:bg-gray-600"
    >
      Continue as Guest
    </button>
  );
};

export default GuestButton;
