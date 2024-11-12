import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      {/* Label overlapping the border */}
      <span className="absolute -top-2 left-3 px-1 bg-white text-[#47B6F2] text-sm">
        Tenure
      </span>

      {/* Dropdown Button positioned to the right of the input */}
      <div className="flex items-center w-full p-2 mt-2 border border-[#47B6F2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47B6F2]">
        {/* Removed the text displaying the selected option here */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto flex items-center justify-center w-7 h-7 bg-[#47B6F2] text-white rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-[#47B6F2]"
        >
          <svg
            className="w-4 h-4"  // Slightly smaller icon size
            fill="currentColor"
            viewBox="0 0 20 20"
          >
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
        <div className="absolute w-full mt-1 bg-white border border-[#47B6F2] rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-2 text-left text-[#47B6F2] hover:bg-blue-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
