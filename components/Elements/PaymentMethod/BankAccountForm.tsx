"use client";
import React from "react";
import Input from "../../forms/Input";
import Dropdown from "../../common/Dropdown";
import { useFormValidation, FieldName } from "@/hooks/useFormValidation"; // Use validation hook

const BankAccountForm: React.FC = () => {
  // Define fields for validation
  const fields = ["fullName", "accountNumber", "ifscNumber", "tenure"] as any;

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    trigger,
  } = useFormValidation(fields);

  const handleChange =
    (field: FieldName) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(field, value);
      trigger(field); // Trigger validation on field change
    };

  const handleDropdownChange = (field: FieldName, value: string) => {
    setValue(field, value);
    trigger(field);
  };

  const onSubmit = async (data: any) => {
    try {
      console.log("Bank Account Form Submitted with the following data:", data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Beneficiary Name */}
      <div className="mt-5 py-3">
        <Input
          type="text"
          placeholder="Beneficiary Name"
          value={watch("fullName") || ""}
          onChange={handleChange("fullName")}
          error={errors.fullName?.message}
        />
      </div>

      {/* Dropdown for Tenure */}
      <div className="py-2">
        <Dropdown
          label="Select Tenure"
          options={["Option 1", "Option 2", "Option 3"]}
          selected={watch("tenure") || ""}
          onChange={(value) => handleDropdownChange("tenure", value)}
          error={errors.tenure?.message}
        />
      </div>

      {/* Account Number */}
      <div className="mt-5 py-3">
        <Input
          type="number"
          placeholder="Account Number"
          value={watch("accountNumber") || ""}
          onChange={handleChange("accountNumber")}
          maxLength={16}
          error={errors.accountNumber?.message}
        />
      </div>

      {/* IFSC Number */}
      <div className="py-3">
        <Input
          type="text"
          placeholder="IFSC Number"
          value={watch("ifscNumber") || ""}
          onChange={handleChange("ifscNumber")}
          error={errors.ifscNumber?.message}
        />
      </div>

      {/* Submit Button */}
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

export default BankAccountForm;
