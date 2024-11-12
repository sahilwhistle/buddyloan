"use client";
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger"; 
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  const baseStyles =
    "px-4 py-2 rounded font-semibold transition duration-300 ease-in-out";
  
  const variantStyles = {
    primary: "bg-gradient-to-b from-[#47B6F2] to-[#00669D] text-white",
    secondary: "bg-[#2DC36A] text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } rounded-md min-w-[140px]`}
    >
      {label}
    </button>
  );
};

export default Button;
