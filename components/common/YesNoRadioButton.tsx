"use client";
import React, { useId } from "react";

interface YesNoRadioProps {
  name: string; // Require a unique name for each instance
  value: string;
  onChange: (value: string) => void;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  extraLabel?: string;
  error: any;
}

const YesNoRadioButton: React.FC<YesNoRadioProps> = ({
  name,
  value,
  onChange,
  label,
  disabled = false,
  required = false,
  extraLabel,
  error,
}) => {
  const id = useId();

  return (
    <div className="w-full max-w-md px-5">
      {label && (
        <label className="block text-sm font-medium text-b-blue mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="flex justify-between items-center">
        {extraLabel && <div className="text-[#A8A7A7]">{extraLabel}</div>}

        <div className="flex items-center">
          <input
            type="radio"
            id={`${id}-${name}-yes`}
            name={name} // Unique name for each instance
            value="yes"
            checked={value === "yes"}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            required={required}
            className={`
              h-4 w-4 text-b-blue focus:ring-b-blue border-b-blue
              ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          />
          <label
            htmlFor={`${id}-${name}-yes`}
            className={`ml-2 text-sm font-medium ${
              value === "yes" ? "text-b-blue" : "text-gray-400"
            } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            Yes
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id={`${id}-${name}-no`}
            name={name} // Unique name for each instance
            value="no"
            checked={value === "no"}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            required={required}
            className={`
              h-4 w-4 text-b-blue focus:ring-b-blue border-b-blue
              ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          />
          <label
            htmlFor={`${id}-${name}-no`}
            className={`ml-2 text-sm font-medium ${
              value === "no" ? "text-b-blue" : "text-gray-400"
            } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            No
          </label>
        </div>
      </div>

      {/* Error */}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default YesNoRadioButton;
