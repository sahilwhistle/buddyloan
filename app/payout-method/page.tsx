"use client";
import React, { useState } from "react";
import ToggleButtonGroup from "../../components/common/ToggleButton";
import UPIForm from "../../components/Elements/PaymentMethod/UPIForm";
import BankAccountForm from "../../components/Elements/PaymentMethod/BankAccountForm";

const PaymentMethod: React.FC = () => {
  const [select, setSelect] = useState("upi");

  const options = [
    { label: "UPI", value: "upi" },
    { label: "Bank Account", value: "bank-account" },
  ];

  const handleSelectionChange = (value: string) => setSelect(value);

  return (
    <div className="min-h-screen p-4 bg-white">
      <h3 className="mt-[100px] mb-[40px] font-poppins text-2xl font-semibold leading-[30.88px] text-center text-[#253C82]">
        Select Payout Method
      </h3>

      <div className="my-3 max-w-sm mx-auto">
        <ToggleButtonGroup
          options={options}
          selectedValue={select}
          setSelectedValue={handleSelectionChange}
        />
      </div>

      <div className="w-full overflow-y-auto p-4 bg-white rounded-[14px] max-w-sm mx-auto border border-gray-100 shadow-custom">
        <h4 className="title text-base font-medium text-gray-400 flex justify-center items-center font-poppins">
          {select === "upi" ? "Enter UPI details" : "Enter Account Details"}
        </h4>

        {select === "upi" ? <UPIForm /> : <BankAccountForm />}
      </div>
    </div>
  );
};

export default PaymentMethod;
