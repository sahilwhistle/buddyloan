"use client";
import React, { useState } from "react";
import ToggleButtonGroup from "../common/ToggleButton";

const Payout = () => {
  const [select, setSelect] = useState("salaried");
  const [selectSec, setSelectSec] = useState("upi");

  const options = [
    { label: "Salaried", value: "salaried" },
    { label: "Self Employed", value: "selfEmployed" },
  ];
  const options2 = [
    { label: "UPI", value: "upi" },
    { label: "Bank", value: "bank" },
  ];
  const handleSelectionChange = (value: string) => {
    setSelect(value);
  };
  const handleSelectionChange2 = (value: string) => {
    setSelectSec(value);
  };
  // glider demo -->
  return (
    <div className="max-w-sm mx-auto bg-[#F6FCFF] p-2">
      <div className="flex w-full justify-center my-3">
        <h5 className="font-bold text-[#253C82] mt-[80px]">
          Select Payout Method
        </h5>
      </div>

      <div className="my-3 flex justify-center w-full">
        <ToggleButtonGroup
          options={options}
          selectedValue={select}
          setSelectedValue={handleSelectionChange}
        />
      </div>
      <div className="my-3 flex justify-center w-full">
        <ToggleButtonGroup
          options={options2}
          selectedValue={selectSec}
          setSelectedValue={handleSelectionChange2}
        />
      </div>
    </div>
  );
};

export default Payout;
