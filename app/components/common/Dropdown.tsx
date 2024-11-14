"use-client";
import React, { useState } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  selected: string | null;
  onChange: (value: string) => void;
  error?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selected,
  onChange,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option); // Propagate the selected value back to the parent
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Label overlapping the border */}
      <span className="absolute top-0 left-3 px-1 text-[#47B6F2] bg-white transform -translate-y-1/2 pointer-events-none">
        {label}
      </span>

      {/* Dropdown Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center w-full px-3 h-[47.47px] mt-2 border rounded-[12px] cursor-pointer ${
          error ? "border-red-500" : "border-[#47B6F2]"
        } focus:outline-none focus:ring-2 focus:ring-[#47B6F2]`}
      >
        {/* Display the selected value if there is one */}
        <span className="flex-grow text-[#47B6F2]">
          {selected || "Select an option"}
        </span>

        <button className="ml-auto flex items-center justify-center w-7 h-7 bg-[#47B6F2] text-white rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-[#47B6F2]">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-2 text-left text-[#47B6F2] hover:bg-blue-100 ${
                option === selected ? "bg-blue-100" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Dropdown;
