import React from "react";

interface TableProps {
  data: { [key: string]: string }[]; // Array of objects where each object represents a row of data
  shadow?: boolean;
}

const Table: React.FC<TableProps> = ({ data, shadow }) => {
  // Extract column titles from the first row of data
  const columnTitles = data.length > 0 ? Object.keys(data[0]) : [];

  // Add shadow class if shadow is true
  const shadowClass = shadow
    ? "mt-[20px] p-[10px] h-full flex flex-col justify-center items-center text-sm w-full rounded-[8px] bg-white text-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] text-black"
    : "mt-[20px] flex flex-col justify-center items-center";

  return (
    <div className="w-full">
      {/* Table Header */}
      <div className="flex w-full bg-gradient-to-r from-[#6F89D6] to-[#243B81] text-white text-sm rounded-[30px] py-3 px-5">
        {columnTitles.map((title, index) => (
          <div
            key={index}
            className={`flex-1 text-center relative ${
              index < columnTitles.length - 1 ? "border-r border-white" : ""
            }`}
          >
            {title}
          </div>
        ))}
      </div>

      {/* Table Content */}
      <div className={shadowClass}>
        {data.length > 0 ? (
          data.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex w-full bg-white text-black text-sm rounded-[8px] py-3 px-10 border border-gray-600 mt-2"
            >
              {columnTitles.map((title, colIndex) => (
                <div
                  key={colIndex}
                  className={`flex-1 text-center relative ${
                    colIndex < columnTitles.length - 1
                      ? "border-r border-gray-400"
                      : ""
                  }`}
                >
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
