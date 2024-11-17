"use client";
import React, { useState } from "react";
import Input from "../../forms/Input";
import { useFormValidation, FieldName } from "@/app/hooks/useFormValidation";

const UPIForm: React.FC = () => {
  // Specify only the fields you want to validate
  const fields = ["upiId", "mobileNumber"] as any;

  // Use form validation hook
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
      const { value } = e.target;

      setValue(field, value); // Update the form value
      trigger(field); // Trigger validation for the specific field
    };

  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      console.log("UPI Form Submitted with the following data:", data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5 py-3">
        <Input
          type="text"
          placeholder="UPI ID"
          value={watch("upiId") || ""}
          onChange={handleChange("upiId")}
          error={errors.upiId?.message}
        />
      </div>
      <div className="py-3">
        <Input
          type="text"
          placeholder="Mobile Number"
          value={watch("mobileNumber") || ""}
          onChange={handleChange("mobileNumber")}
          error={errors.mobileNumber?.message}
        />
      </div>
      <div className="py-3 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-[200px] py-[16px] px-4 bg-b-blue text-white font-poppins text-sm font-semibold rounded-[18px]
            ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Submitting..." : "Add Payout Method"}
        </button>
      </div>
    </form>
  );
};

export default UPIForm;
