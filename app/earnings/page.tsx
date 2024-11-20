"use client";
import React from "react";
import Table from "../../components/common/Table";
import BalanceCard from "../../components/common/BalenceCard";
import tableData from "../../mock/earnings";
import DropdownTwo from "../../components/common/DropwdownTwo";

const Earnings = () => {
  const timeOptions = [
    { value: "7d", label: "Last 7 Days" },
    { value: "30d", label: "Last 30 Days" },
    { value: "90d", label: "Last 3 Months" },
    { value: "all", label: "All Time" },
  ];

  const handleSelect = (option: any) => {
    console.log("Selected time period:", option);
  };

  return (
    <div className="min-h-screen p-4 bg-white">
      <div className="max-w-sm mx-auto">
        {/* Header Banner */}
        <BalanceCard
          labelOne="Total Earnings"
          labelOneBalance={1210}
          button="withdraw"
        />
        <div className="shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] bg-[#47B6F226] mt-[20px] py-1 rounded-[10px]">
          {/* Date */}
          <div className="py-2 px-5 h-full flex flex-row justify-between items-center bg-transparent text-sm w-full rounded-[8px] text-center text-black">
            <h3 className="text-black text-lg font-semibold">Date</h3>
            <DropdownTwo
              label="All Time"
              options={timeOptions}
              onSelect={handleSelect}
              defaultValue="All Time"
            />
          </div>

          {/* Lender */}
          <div className="py-2 px-5 h-full flex flex-row justify-between items-center bg-transparent text-sm w-full rounded-[8px] text-center text-black">
            <h3 className="text-black text-lg font-semibold">Lender</h3>
            <DropdownTwo
              label="All"
              options={timeOptions}
              onSelect={handleSelect}
              defaultValue="All"
            />
          </div>
        </div>
        <div className="mt-[40px]">
          {/* Payment History Table */}
          <Table data={tableData} size="small" />
        </div>
      </div>
    </div>
  );
};

export default Earnings;
