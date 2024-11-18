"use client";
import CollapsibleCard from "@/components/common/CollapsibleCard";
import DropdownTwo from "@/components/common/DropwdownTwo";
import offersData from "@/mock/offersdata";
import React, { useState } from "react";

const Offers = () => {
  const timeOptions = [
    { value: "tat", label: "TAT" },
    { value: "bl prefered choice", label: "BL Prefered Choice" },
    { value: "max payout", label: "Max Payout" },
    { value: "max conversion", label: "Max Conversion" },
  ];

  const handleSelect = (option: any) => {
    console.log("Selected time period:", option);
  };
  return (
    <div className="min-h-screen p-4 bg-white overflow-auto">
      <div className="max-w-sm mx-auto">
        <div className="mt-[80px] flex justify-between items-center px-4">
          <h3 className="font-poppins text-[26px] font-semibold leading-[30.88px] text-center text-[#253C82]">
            Offers For You
          </h3>

          {/* Dropdown */}
          <DropdownTwo
            label="All Time"
            options={timeOptions}
            onSelect={handleSelect}
            defaultValue="Sort by"
            size="small"
          />
        </div>

        {/* Collapseable Cards */}
        <div className="mt-[40px] mb-[30px]">
          <CollapsibleCard
            title="Personal Loan"
            subtitle="3 Offers"
            offersData={offersData}
          />
        </div>
        <div className="my-5 mb-[30px]">
          <CollapsibleCard
            title="Personal Loan"
            subtitle="3 Offers"
            offersData={offersData}
          />
        </div>
        <div className="my-5 mb-[30px]">
          <CollapsibleCard
            title="Personal Loan"
            subtitle="3 Offers"
            offersData={offersData}
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
