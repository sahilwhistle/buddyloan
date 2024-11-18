"use client";
import React, { useState } from "react";
import Input from "../../forms/Input";
import Dropdown from "../../common/Dropdown";
import YesNoRadioButton from "../../common/YesNoRadioButton";
import { useFormValidation, FieldName } from "@/hooks/useFormValidation";
import Modal from "@/components/common/modal";

const SelfEmployedDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fields = [
    "companyType",
    "hasBusinessProof",
    "registrationId",
    "annualTurnover",
    "experience",
    "hasGst",
    "gstNumber",
  ] as any;

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    trigger,
    clearErrors,
  } = useFormValidation(fields);

  const formData = watch();

  const handleChange =
    (field: FieldName) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(field, e.target.value);
      trigger(field);
    };

  const handleDropdownChange = (field: FieldName, value: string) => {
    setValue(field, value);
    trigger(field);
  };

  const handleRadioChange = (field: FieldName, value: string) => {
    setValue(field, value);

    // Clear errors for conditional fields when radio selection changes
    if (field === "hasBusinessProof" && value === "no") {
      clearErrors("registrationId");
      console.log("hasBusinessProof no");

      delete formData.registrationId;
    }
    if (field === "hasGst" && value === "no") {
      clearErrors("gstNumber");
      delete formData.gstNumber;
    }

    trigger(field);
  };

  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      // Remove unused fields based on radio selections
      if (data.hasBusinessProof === "no") {
        delete data.registrationId;
      }
      if (data.hasGst === "no") {
        delete data.gstNumber;
      }

      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  // Handle modal confirm
  const handleConfirm = () => {
    console.log("Confirmed!");
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Show Modal upon sucessfully submited */}
      <Modal
        isOpen={isModalOpen}
        title="Loan Application Has Been Submitted"
        subTitle="The Lender Link has been sent to the Customer’s WhatsApp"
        confirmText="Ok"
        onConfirm={handleConfirm}
      />

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Company Type */}
        <div className="py-2">
          <Dropdown
            label="Company Type"
            options={[
              "Sole Proprietorship",
              "Partnership",
              "Pvt. Ltd",
              "Freelancer",
            ]}
            selected={watch("companyType") || ""}
            onChange={(value) => handleDropdownChange("companyType", value)}
            error={errors.companyType?.message}
          />
        </div>

        {/* Business Proof */}
        <div className="py-2 text-center">
          <span className="text-[#A8A7A7]">
            Do you have business registration proof?
          </span>
          <div className="mt-3">
            <YesNoRadioButton
              name="proof"
              value={watch("hasBusinessProof") || ""}
              onChange={(value) => handleRadioChange("hasBusinessProof", value)}
              error={errors.hasBusinessProof?.message}
            />
          </div>
        </div>

        {formData.hasBusinessProof === "yes" && (
          <>
            {/* Registration ID */}
            <div className="mt-5 py-3">
              <Input
                type="text"
                placeholder="Registration ID"
                value={watch("registrationId") || ""}
                onChange={handleChange("registrationId")}
                error={errors.registrationId?.message}
              />
            </div>
            {/* Annual Turnover */}
            <div className="py-3">
              <Input
                type="text"
                placeholder="Annual Turnover"
                value={watch("annualTurnover") || ""}
                onChange={handleChange("annualTurnover")}
                error={errors.annualTurnover?.message}
              />
            </div>
          </>
        )}

        {formData.hasBusinessProof === "no" && (
          <div className="mt-5 py-3">
            <Input
              type="text"
              placeholder="Annual Turnover"
              value={watch("annualTurnover") || ""}
              onChange={handleChange("annualTurnover")}
              error={errors.annualTurnover?.message}
            />
          </div>
        )}

        {/* Dropdown for Business Experience */}
        <div className="py-2">
          <Dropdown
            label="How old is your business?"
            options={["<2 years", "2-5 years", ">5 years"]}
            selected={watch("experience") || ""}
            onChange={(value) => handleDropdownChange("experience", value)}
            error={errors.experience?.message}
          />
        </div>

        {/* GST */}
        <div className="py-2">
          <YesNoRadioButton
            name="gst"
            extraLabel="GST Available:"
            value={watch("hasGst") || ""}
            onChange={(value) => handleRadioChange("hasGst", value)}
            error={errors.hasGst?.message}
          />
        </div>

        {formData.hasGst === "yes" && (
          <div className="mt-5 py-3">
            <Input
              type="text"
              placeholder="GST Number"
              value={watch("gstNumber") || ""}
              onChange={handleChange("gstNumber")}
              error={errors.gstNumber?.message}
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-[20px] py-3 flex justify-center">
          <button
            type="submit"
            className="w-[200px] py-[12px] px-4 bg-b-blue text-white font-poppins text-lg font-semibold rounded-[18px]"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SelfEmployedDetails;
