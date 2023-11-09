import React from "react";
import axios from "axios";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const MyButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  const handleClick = async () => {
    const response = await axios.get("http://localhost:8000/sagaai/api");
    console.log(response.data);
  };

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
};

export default MyButton;