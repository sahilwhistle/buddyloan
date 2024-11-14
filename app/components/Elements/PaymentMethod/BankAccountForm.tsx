"use client";
import React, { useState } from "react";
import Input from "../../forms/Input";
import Dropdown from "../../common/Dropdown";

interface BankAccountFormData {
  beneficiaryName: string;
  accountNumber: string;
  ifscNumber: string;
  selectedOption: string;
}

const BankAccountForm: React.FC = () => {
  const [formData, setFormData] = useState<BankAccountFormData>({
    beneficiaryName: "",
    accountNumber: "",
    ifscNumber: "",
    selectedOption: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof BankAccountFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };

  const handleDropdownChange = (value: string) => {
    setFormData({
      ...formData,
      selectedOption: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(
      "Bank Account Form Submitted with the following data:",
      formData
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 py-3">
        <Input
          type="text"
          placeholder="Beneficiary Name"
          value={formData.beneficiaryName}
          onChange={handleChange("beneficiaryName")}
        />
      </div>
      <div className="py-2">
        <Dropdown
          label="Select Tenure"
          options={["Option 1", "Option 2", "Option 3"]}
          selected={formData.selectedOption}
          onChange={handleDropdownChange}
          error={
            submitted && formData.selectedOption === ""
              ? "Please select a tenure"
              : undefined
          }
        />
      </div>
      <div className="mt-5 py-3">
        <Input
          type="text"
          placeholder="Account Number"
          value={formData.accountNumber}
          onChange={handleChange("accountNumber")}
        />
      </div>
      <div className="py-3">
        <Input
          type="text"
          placeholder="IFSC Number"
          value={formData.ifscNumber}
          onChange={handleChange("ifscNumber")}
        />
      </div>
      <div className="py-3 flex justify-center">
        <button
          type="submit"
          className="w-[200px] py-[16px] px-4 bg-b-blue text-white font-poppins text-sm font-semibold rounded-[18px]"
        >
          Add Payout Method
        </button>
      </div>
    </form>
  );
};

export default BankAccountForm;
