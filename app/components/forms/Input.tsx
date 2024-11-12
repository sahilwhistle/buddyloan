"use client";
import React from "react";

interface InputProps {
  placeholder: string;
  value:string;
  onChange:any;
  type?:string;
}

const Input: React.FC<InputProps> = ({ placeholder , value, onChange,type='text'}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className="w-full pt-4 pb-2  px-3 border-t-2 border-b-2 border-l-2 border-r-2 border-[#47B6F2] outline-none focus:ring-0 rounded-md"
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label className="absolute top-0 left-3 px-1 text-[#47B6F2] bg-white transform -translate-y-1/2 pointer-events-none">
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
