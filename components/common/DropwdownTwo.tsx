"use client";
import { useState } from "react";

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  label: string;
  options: DropdownOption[];
  onSelect?: (option: DropdownOption) => void;
  defaultValue?: string;
  size?: string;
}

const DropdownTwo: React.FC<CustomDropdownProps> = ({
  label,
  options,
  onSelect,
  defaultValue,
  size,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(defaultValue || label);

  const handleSelect = (option: DropdownOption): void => {
    setSelected(option.label);
    setIsOpen(false);
    onSelect?.(option);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`min-w-[120px] text-xs ${
          size ? "px-[18px]" : "px-6"
        } py-1 flex items-center justify-between text-white rounded-full bg-gradient-to-r from-[#6F89D6] to-[#243B81] text-white rounded-[30px] transition-all duration-200`}
      >
        <span className={`${size ? "text-[12px] py-[2px] " : "text-sm"} pe-2`}>
          {selected}
        </span>
        <span
          className={`w-2 h-2 border-r-2 border-b-2 border-white transform rotate-45 transition-transform duration-200 mt-[-4px] ${
            isOpen ? "rotate-[-135deg] mt-1" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 py-1 text-center text-sm text-black hover:bg-purple-50 cursor-pointer first:rounded-t-lg last:rounded-b-lg border-b-[0.2px]"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownTwo;
