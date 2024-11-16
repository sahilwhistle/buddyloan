import React from "react";

interface TableProps {
  data: {
    headers: string[]; // Array of column titles
    rows: { [key: string]: string }[]; // Array of objects where each object represents a row of data
  }[];
  shadow?: boolean;
  size?: string;
}

const Table: React.FC<TableProps> = ({ data, shadow, size }) => {
  // Extract headers and rows from the first data object
  const headers = data[0]?.headers || [];
  const rows = data[0]?.rows || [];

  // Add shadow class if shadow is true
  const shadowClass = shadow
    ? "mt-[5px] p-[10px] h-full flex flex-col justify-center items-center text-sm w-full rounded-[8px] bg-white text-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] text-black"
    : "mt-[5px] flex flex-col justify-center items-center";

  return (
    <div className="w-full">
      {/* Table Header */}
      <div
        className={`flex w-full justify-center items-center  bg-gradient-to-r from-[#6F89D6] to-[#243B81] text-white rounded-[30px] ${
          size ? "text-[10px] py-2 px-2 " : "text-sm py-3 px-5 "
        } `}
      >
        {headers.map((title, index) => (
          <div
            key={index}
            className={`flex-1 text-center relative ${
              index < headers.length - 1 ? "border-r border-white" : ""
            }`}
          >
            {title}
          </div>
        ))}
      </div>
      {/* Table Content */}
      <div className={shadowClass}>
        {rows.length > 0 ? (
          rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex w-full bg-white text-black ${
                size ? "text-[10px]" : "text-sm"
              } rounded-[8px] py-3 px-2 border border-[#005886] mt-2`}
            >
              {headers.map((title, colIndex) => (
                <div
                  key={colIndex}
                  className={`flex-1 text-center relative ${
                    colIndex < headers.length - 1
                      ? "border-r border-[#005886]"
                      : ""
                  }`}
                >
                  {/* Dynamically render the row data based on the title */}
                  {row[title]}
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="mt-[20px] p-[10px] h-full flex justify-center items-center text-sm w-full rounded-[8px] bg-white text-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] text-black">
            No History Found
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
