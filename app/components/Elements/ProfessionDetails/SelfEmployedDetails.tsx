"use client";
import React, { useState } from "react";
import Input from "../../forms/Input";
import Dropdown from "../../common/Dropdown";
import YesNoRadioButton from "../../common/YesNoRadioButton";

interface SelfEmployedDetailsProps {
  onSubmit: (data: SelfEmployedFormData) => void;
}

interface SelfEmployedFormData {
  companyType: string;
  hasBusinessProof: string;
  hasGst: string;
  registrationId?: any;
  annualTurnover?: any;
  businessExperience: string;
  gstNumber?: any;
}

const SelfEmployedDetails: React.FC<SelfEmployedDetailsProps> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState<SelfEmployedFormData>({
    companyType: "",
    hasBusinessProof: "",
    hasGst: "",
    registrationId: "",
    annualTurnover: "",
    businessExperience: "",
    gstNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof SelfEmployedFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevData) => ({ ...prevData, [field]: e.target.value }));
    };

  const handleDropdownChange = (
    field: keyof SelfEmployedFormData,
    value: string
  ) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleRadioChange = (
    field: keyof SelfEmployedFormData,
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
      <div className="py-2">
        <Dropdown
          label="Company Type"
          options={[
            "Sole Proprietorship",
            "Partnership",
            "Pvt. Ltd",
            "Freelancer",
          ]}
          selected={formData.companyType}
          onChange={(value) => handleDropdownChange("companyType", value)}
          error={
            submitted && !formData.companyType
              ? "Please select an option"
              : undefined
          }
        />
      </div>
      <div className="py-2 text-center">
        <span className="text-[#A8A7A7]">
          Do you have business registration proof?
        </span>
        <div className="mt-3">
          <YesNoRadioButton
            name="proof"
            value={formData.hasBusinessProof}
            onChange={(value: any) =>
              handleRadioChange("hasBusinessProof", value)
            }
          />
        </div>
      </div>
      {formData.hasBusinessProof === "yes" && (
        <>
          <div className="mt-5 py-3">
            <Input
              type="text"
              placeholder="Registration ID"
              value={formData.registrationId}
              onChange={handleChange("registrationId")}
            />
          </div>
          <div className="py-3">
            <Input
              type="text"
              placeholder="Annual Turnover"
              value={formData.annualTurnover}
              onChange={handleChange("annualTurnover")}
            />
          </div>
        </>
      )}

      {formData.hasBusinessProof === "no" && (
        <div className="mt-5 py-3">
          <Input
            type="text"
            placeholder="Annual Turnover"
            value={formData.annualTurnover}
            onChange={handleChange("annualTurnover")}
          />
        </div>
      )}

      <div className="py-2">
        <Dropdown
          label="How old is your business?"
          options={["<2 years", "2-5 years", ">5 years"]}
          selected={formData.businessExperience}
          onChange={(value) =>
            handleDropdownChange("businessExperience", value)
          }
          error={
            submitted && !formData.businessExperience
              ? "Please select an option"
              : undefined
          }
        />
      </div>
      <div className="py-2">
        <YesNoRadioButton
          value={formData.hasGst}
          name="gst"
          extraLabel="GST Available:"
          onChange={(value) => handleRadioChange("hasGst", value)}
        />
      </div>
      {formData.hasGst === "yes" && (
        <div className="mt-5 py-3">
          <Input
            type="text"
            placeholder="GST Number"
            value={formData.gstNumber}
            onChange={handleChange("gstNumber")}
          />
        </div>
      )}
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

export default SelfEmployedDetails;
