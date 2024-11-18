"use client";
import React, { useState } from "react";
import Input from "../../forms/Input";
import Dropdown from "../../common/Dropdown";
import { FieldName, useFormValidation } from "@/hooks/useFormValidation";

const SalariedDetails = () => {
  // Specify only the fields you want to validate
  const fields = [
    "companyName",
    "email",
    "monthlyIncome",
    "address",
    "pincode",
    "experience",
  ] as any;

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    trigger,
  } = useFormValidation(fields);

  // Handle form field change
  const handleChange =
    (field: FieldName) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(field as any, e.target.value);
      trigger(field as any);
    };

  const handleDropdownChange = (field: FieldName, value: string) => {
    setValue(field as any, value);
    trigger(field as any);
  };

  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Company Name */}
      <div className="mt-5 py-3">
        <Input
          type="text"
          placeholder="Company Name"
          value={watch("companyName") || ""}
          onChange={handleChange("companyName")}
          error={errors.companyName?.message}
        />
      </div>

      {/* Office Email ID */}
      <div className="py-3">
        <Input
          type="text"
          placeholder="Office Email Id"
          value={watch("email") || ""}
          onChange={handleChange("email")}
          error={errors.email?.message}
        />
      </div>

      {/* Monthly Income */}
      <div className="py-3">
        <Input
          type="text"
          placeholder="Monthly Income"
          value={watch("monthlyIncome") || ""}
          onChange={handleChange("monthlyIncome")}
          error={errors.monthlyIncome?.message}
        />
      </div>

      {/* Adress */}
      <div className="py-3">
        <Input
          type="text"
          placeholder="Company Address"
          value={watch("address") || ""}
          onChange={handleChange("address")}
          error={errors.address?.message}
        />
      </div>

      {/* Pincode */}
      <div className="py-3">
        <Input
          type="text"
          placeholder="Company PIN Code"
          value={watch("pincode") || ""}
          onChange={handleChange("pincode")}
          error={errors.pincode?.message}
        />
      </div>

      <div className="py-2">
        {/* Dropdown for Experience */}
        <div className="py-4">
          <Dropdown
            label="Total work experience"
            options={["<2 years", "2-5 years", ">5 years"]}
            selected={watch("experience") || ""}
            onChange={(value) => handleDropdownChange("experience", value)}
            error={errors.experience?.message}
          />
        </div>
      </div>

      {/* Submit */}
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
