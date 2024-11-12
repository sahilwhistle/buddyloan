import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomCalendar: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-64">
      {/* Label overlapping the border */}
      <span className="absolute -top-2 left-3 px-1 bg-white text-[#47B6F2] text-sm">
        Tenure
      </span>

      {/* Input field with calendar button */}
      <div className="flex items-center w-full p-2 mt-2 border border-[#47B6F2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47B6F2]">
        {/* Calendar Icon Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto flex items-center justify-center w-7 h-7 bg-[#47B6F2] text-white rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-[#47B6F2]"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm-9-9h2v2H10zm0 4h2v2H10zm4-4h2v2h-2zm0 4h2v2h-2z"
            />
          </svg>
        </button>
      </div>

      {/* Date Picker */}
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-[#47B6F2] rounded-lg shadow-lg z-10">
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setIsOpen(false); // Close the calendar after selecting a date
            }}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default CustomCalendar;
