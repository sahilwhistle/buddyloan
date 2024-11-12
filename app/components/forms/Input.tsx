import React from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  error?: string; 
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, type = "text", error }) => {
  return (
    <div className="relative w-full mb-4">
      <input
        type={type}
        className={`w-full pt-4 pb-2 px-3 border-t-2 border-b-2 border-l-2 border-r-2 rounded-md ${
          error ? "border-red-500" : "border-[#47B6F2]"
        } outline-none focus:ring-0`}
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label className="absolute top-0 left-3 px-1 text-[#47B6F2] bg-white transform -translate-y-1/2 pointer-events-none">
        {placeholder}
      </label>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>} 
    </div>
  );
};

export default Input;
