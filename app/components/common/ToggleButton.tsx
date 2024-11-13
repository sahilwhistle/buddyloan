import React, { useState } from "react";

interface ToggleButtonGroupProps {
  options: { label: string; value: string }[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  options,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <div className="mb-6 flex justify-center border-[1px] bg-white border-blue rounded-[30px] border-[#253C82] h-[45px]">
      {options.map((option, index) => (
        <div
          key={option.value}
          onClick={() => setSelectedValue(option.value)}
          className={`flex items-center justify-center text-center font-bold w-full cursor-pointer rounded-full ${
            selectedValue === option.value
              ? "bg-gradient-to-r from-[#6F89D6] to-[#243B81] text-white"
              : "bg-white text-[#253C82]"
          } ${index === 0 ? "rounded-l-full" : ""} ${
            index === options.length - 1 ? "rounded-r-full" : ""
          }`}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
