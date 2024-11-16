"use client";
import React from "react";
import { applicationData, offersData } from "../mock/application";
import AppCard from "../components/common/AppCard";
import Offers from "../components/common/Offers";
import DropdownTwo from "../components/common/DropwdownTwo";

const LoanStatus = () => {
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
    <div className="min-h-screen p-4 bg-white overflow-auto">
      <h3 className="mt-[80px] mb-[10px] font-poppins text-[26px] font-semibold leading-[30.88px] text-center text-[#253C82]">
        Active Applications
      </h3>

      {/* Dropdown */}
      <div className="flex justify-end items-end mb-4">
        <DropdownTwo
          label="All Time"
          options={timeOptions}
          onSelect={handleSelect}
          defaultValue="Sort by Loan Status"
        />
      </div>

      {/* Application Cards */}
      <AppCard data={applicationData} />

      {/* Divider */}
      <div className="border border-[#A8A7A7] border-[0.2px] w-full"></div>

      {/*  */}
      <div className="my-3 flex justify-center">
        <h5 className="font-bold text-[#253C82]">Other Available Offers</h5>
      </div>

      {/* Offers */}
      <Offers data={offersData} />
    </div>
  );
};

export default LoanStatus;
