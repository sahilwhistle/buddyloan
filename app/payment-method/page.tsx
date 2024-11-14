"use client";
import React, { useState } from "react";
import Input from "../components/forms/Input";
import ToggleButtonGroup from "../components/common/ToggleButton";
import Dropdown from "../components/common/Dropdown";

const PaymentMethod = () => {
  const [select, setSelect] = useState("upi");
  // State object to hold all form data
  const [formData, setFormData] = useState({
    name: "",
    upiId: "",
    mobileNumber: "",
    accountNumber: "",
    beneficiaryName: "",
    dob: "",
    selectedOption: "",
    accNumber: "",
    ifscNumber: "",
  });
  const [submitted, setSubmitted] = useState(false); // Track form submission

  // Handle form field change by updating only the specific field in formData
  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };

  const options = [
    { label: "UPI", value: "upi" },
    { label: "Bank Account", value: "bank-account" },
  ];

  const handleSelectionChange = (value: string) => {
    setSelect(value);
  };

  const handleDropdownChange = (value: string) => {
    setFormData({
      ...formData,
      selectedOption: value,
    });
  };

  // Handle form submission and log the collected data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Log the collected form data to the console
    console.log("Form Submitted with the following data:", formData);
  };

  return (
    <div
      className={`${select === "upi" ? "h-[100vh]" : "h-full"} p-4 bg-white`}
    >
      <h3 className="mt-[100px] mb-[40px] font-poppins text-2xl font-semibold leading-[30.88px] text-center text-[#253C82]">
        Select Payment Method
      </h3>

      <div className="my-3 max-w-sm mx-auto">
        <ToggleButtonGroup
          options={options}
          selectedValue={select}
          setSelectedValue={handleSelectionChange}
        />
      </div>

      {/* UPI Form */}
      <div className="w-full overflow-y-auto p-4 bg-white rounded-[14px] max-w-sm mx-auto border border-gray-100 shadow">
        <h4 className="title text-base font-medium text-gray-400 flex justify-center items-center font-poppins">
          {select === "upi" ? "Enter UPI details" : "Enter Account Details"}
        </h4>

        <form onSubmit={handleSubmit}>
          {/* UPI Id */}
          {select === "upi" ? (
            <>
              <div className="mt-5 py-3">
                <Input
                  type="text"
                  placeholder="UPI ID"
                  value={formData.upiId}
                  onChange={handleChange("upiId")}
                />
              </div>

              {/* Mobile Number */}
              <div className="py-3">
                <Input
                  type="text"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange("mobileNumber")}
                />
              </div>
            </>
          ) : (
            <>
              <div className="mt-5 py-3">
                <Input
                  type="text"
                  placeholder="Beneficiary Name"
                  value={formData.beneficiaryName}
                  onChange={handleChange("beneficiaryName")}
                />
              </div>

              {/* Dropdown for Select Tenure */}
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
                  value={formData.accountNumber} // Corrected to panNumber
                  onChange={handleChange("accountNumber")} // Corrected to panNumber
                />
              </div>

              {/* IFSC Number */}
              <div className="py-3">
                <Input
                  type="text"
                  placeholder="IFSC Number"
                  value={formData.ifscNumber} // Corrected to pincode
                  onChange={handleChange("ifscNumber")} // Corrected to pincode
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="py-3 flex justify-center">
            <button
              type="submit"
              className="w-[200px] py-[16px] px-4 bg-b-blue text-white font-poppins text-sm font-semibold rounded-xl"
            >
              Add Payout Method
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentMethod;
