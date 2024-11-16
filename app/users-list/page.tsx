"use client";
import React from "react";
import DropdownTwo from "../components/common/DropwdownTwo";
import UserCard from "../components/common/userCard";
import usersdata from "../mock/userlistdata";

const UsersList = () => {
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
      <div className="max-w-sm mx-auto">
        <h3 className="mt-[80px] mb-[30px] font-poppins text-[30px] font-semibold leading-[30.88px] text-center text-[#253C82]">
          Users list
        </h3>

        {/* Dropdown */}
        <div className="flex justify-between items-center mb-4">
          <DropdownTwo
            label="All Time"
            options={timeOptions}
            onSelect={handleSelect}
            defaultValue="Sort by Loan Type"
            size="small"
          />

          <DropdownTwo
            label="All Time"
            options={timeOptions}
            onSelect={handleSelect}
            defaultValue="Sort by Loan Status"
            size="small"
          />
        </div>

        {/* Header */}
        <div className="mb-5 flex w-full justify-center items-center  bg-gradient-to-r from-[#6F89D6] to-[#243B81] text-white rounded-[30px] text-sm py-2 px-5">
          <div className="flex-[0.6] text-center relative border-r border-white">
            User Name
          </div>
          <div className="flex-[0.4] text-center relative">Status</div>
        </div>

        {/* User Cards */}
        <UserCard data={usersdata} />
      </div>
    </div>
  );
};

export default UsersList;
