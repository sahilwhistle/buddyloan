import React, { useState, useRef, useEffect, FC } from "react";

interface CalendarInputProps {
  label?: string;
  selectedDate?: Date | null;
  onDateChange?: (date: Date | null) => void;
}

const CalendarInput: FC<CalendarInputProps> = ({
  label,
  selectedDate: initialSelectedDate = null,
  onDateChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialSelectedDate
  );
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysInWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const years = Array.from(
    { length: 101 },
    (_, i) => i + (new Date().getFullYear() - 50)
  ); // Range of 50 years back and forward

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDaysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month: number, year: number) =>
    new Date(year, month, 1).getDay();

  const generateDates = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const dates = Array(firstDay).fill(null);

    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(i);
    }
    return dates;
  };

  const handleDateSelect = (day: number | null) => {
    if (day) {
      const newDate = new Date(currentYear, currentMonth, day);
      setSelectedDate(newDate);
      onDateChange && onDateChange(newDate);
      setIsOpen(false);
    }
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentYear(parseInt(event.target.value));
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="relative w-full" ref={calendarRef}>
      <span className="absolute top-0 left-3 px-1 text-[#47B6F2] bg-white transform -translate-y-1/2 pointer-events-none">
        {label}
      </span>

      <div
        className={`flex items-center w-full p-3 mt-2 border rounded-[12px] focus:outline-none border-b-blue`}
      >
        <span className="text-gray-700">{formatDate(selectedDate)}</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto flex items-center justify-center"
        >
          <img src="/assets/img/calendar.png" className="h-[22px] w-[22px]" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-b-blue rounded-lg shadow-lg z-10 p-4">
          <div className="flex justify-between items-center mb-4">
            <select
              value={currentMonth}
              onChange={handleMonthChange}
              className="p-1 border rounded text-gray-700"
            >
              {months.map((month, index) => (
                <option key={month} value={index}>
                  {month}
                </option>
              ))}
            </select>
            <select
              value={currentYear}
              onChange={handleYearChange}
              className="p-1 border rounded text-gray-700"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {daysInWeek.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-gray-500 mb-2"
              >
                {day}
              </div>
            ))}
            {generateDates().map((day, index) => (
              <button
                key={index}
                className={`h-8 w-8 text-sm rounded-full flex items-center justify-center
                  ${!day ? "invisible" : "hover:bg-gray-100"}
                  ${
                    selectedDate &&
                    day === selectedDate.getDate() &&
                    currentMonth === selectedDate.getMonth() &&
                    currentYear === selectedDate.getFullYear()
                      ? "bg-b-blue text-white"
                      : "text-gray-700"
                  }
                `}
                onClick={() => handleDateSelect(day)}
                disabled={!day}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarInput;
