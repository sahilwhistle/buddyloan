import React from "react";

interface TableHeaderProps {
  headers: string[]; // Array of header labels (e.g., ["Date", "Amount", "Transfer Status"])
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <div className="w-full">
      <button className="flex justify-between items-center w-full rounded-[30px] bg-gradient-to-r from-[#6F89D6] to-[#243B81] py-3 px-10 text-white text-sm">
        {headers.map((header, index) => (
          <div key={index}>
            <span className="mx-2">{header}</span>
            <span>
              {index < headers.length - 1 && <span className="px-2">|</span>}
            </span>
          </div>
        ))}
      </button>
    </div>
  );
};

export default TableHeader;
