import React from "react";

interface YesNoRadioProps {
  name?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  extraLabel?: String;
}

const YesNoRadio: React.FC<YesNoRadioProps> = ({
  name = "yesNo",
  value,
  onChange,
  label,
  disabled = false,
  required = false,
  extraLabel,
}) => {
  return (
    <div className="w-full max-w-md px-5">
      {label && (
        <label className="block text-sm font-medium text-b-blue mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="flex justify-between items-center">
        {/* Extra lable */}
        {extraLabel && <div className="text-[#A8A7A7]">{extraLabel}</div>}

        <div className="flex items-center">
          <input
            type="radio"
            id={`${name}-yes`}
            name={name}
            value="yes"
            checked={value === "yes"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange(e.target.value)
            }
            disabled={disabled}
            required={required}
            className={`
              h-4 w-4 text-b-blue focus:ring-b-blue border-b-blue
              ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          />
          <label
            htmlFor={`${name}-yes`}
            className={`ml-2 text-sm font-medium text-b-blue ${
              value === "yes" ? "text-b-blue" : "text-gray-400"
            } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            Yes
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id={`${name}-no`}
            name={name}
            value="no"
            checked={value === "no"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange(e.target.value)
            }
            disabled={disabled}
            required={required}
            className={`
              h-4 w-4 text-b-blue focus:ring-b-blue border-b-blue
              ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          />
          <label
            htmlFor={`${name}-no`}
            className={`ml-2 text-sm font-medium text-b-blue  ${
              value === "no" ? "text-b-blue" : "text-gray-400"
            } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            No
          </label>
        </div>
      </div>
    </div>
  );
};

export default YesNoRadio;
