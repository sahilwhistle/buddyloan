"use client";
import React, { useState } from "react";
import Input from "../../forms/Input";
import Dropdown from "../../common/Dropdown";

interface SalariedDetailsProps {
  onSubmit: (data: SalariedFormData) => void;
}

interface SalariedFormData {
  companyName: string;
  officeEmail: string;
  monthlyIncome: string;
  companyAddress: string;
  companyPinCode: string;
  experience: string;
}

const SalariedDetails: React.FC<SalariedDetailsProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<SalariedFormData>({
    companyName: "",
    officeEmail: "",
    monthlyIncome: "",
    companyAddress: "",
    companyPinCode: "",
    experience: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof SalariedFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevData) => ({ ...prevData, [field]: e.target.value }));
    };

  const handleDropdownChange = (
    field: keyof SalariedFormData,
    value: string
  ) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 py-3">
        <Input
          type="text"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange("companyName")}
        />
      </div>
      <div className="py-3">
        <Input
          type="text"
          placeholder="Office Email Id"
          value={formData.officeEmail}
          onChange={handleChange("officeEmail")}
        />
      </div>
      <div className="py-3">
        <Input
          type="text"
          placeholder="Monthly Income"
          value={formData.monthlyIncome}
          onChange={handleChange("monthlyIncome")}
        />
      </div>
      <div className="py-3">
        <Input
          type="text"
          placeholder="Company Address"
          value={formData.companyAddress}
          onChange={handleChange("companyAddress")}
        />
      </div>
      <div className="py-3">
        <Input
          type="text"
          placeholder="Company PIN Code"
          value={formData.companyPinCode}
          onChange={handleChange("companyPinCode")}
        />
      </div>
      <div className="py-2">
        <Dropdown
          label="Total work experience"
          options={["<2 years", "2-5 years", ">5 years"]}
          selected={formData.experience}
          onChange={(value: any) => handleDropdownChange("experience", value)}
          error={
            submitted && !formData.experience
              ? "Please select an option"
              : undefined
          }
        />
      </div>
      <div className="mt-[20px] py-3 flex justify-center">
        <button
          type="submit"
          className="w-[200px] py-[12px] px-4 bg-b-blue text-white font-poppins text-lg font-semibold rounded-[18px]"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SalariedDetails;
