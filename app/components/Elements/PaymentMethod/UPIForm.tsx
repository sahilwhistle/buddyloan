"use client";
import React, { useState } from "react";
import Input from "../../forms/Input";

interface UPIFormData {
  upiId: string;
  mobileNumber: string;
}

const UPIForm: React.FC = () => {
  const [formData, setFormData] = useState<UPIFormData>({
    upiId: "",
    mobileNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof UPIFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("UPI Form Submitted with the following data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 py-3">
        <Input
          type="text"
          placeholder="UPI ID"
          value={formData.upiId}
          onChange={handleChange("upiId")}
        />
      </div>
      <div className="py-3">
        <Input
          type="text"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange("mobileNumber")}
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

export default UPIForm;
