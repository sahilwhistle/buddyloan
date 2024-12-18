"use client";
import { useState, useEffect } from "react";
import React from "react";
import Input from "../../components/forms/Input";
import Dropdown from "../../components/common/Dropdown";
import { FieldName, useFormValidation } from "../../hooks/useFormValidation";
import CalendarInput from "../../components/common/CalendarInput";
import OtpInput from "@/components/common/OtpInput";

const PersonalDetails = () => {
  const [isOTPSent, setIsOTPSent] = useState(false); // Track if OTP has been sent

  // Specify only the fields you want to validate
  const fields = [
    "firstName",
    "lastName",
    "mobileNumber",
    "email",
    "pincode",
    "gender",
    "marritalSatus",
    "panNumber",
    "dob",
    // "terms",
    "otp",
  ] as any;

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    trigger,
  } = useFormValidation(fields);

  const formData = watch();

  // Handle form field change
  const handleChange =
    (field: FieldName) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(field as any, e.target.value);
      trigger(field as any);
    };

  // Handle form checkbox field change by updating only the specific field in formData
  const handleCheck =
    (field: FieldName) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(field as any, e.target.checked);
      trigger(field as any);
    };

  // Callback to handle date change
  const handleDateChange = (field: FieldName, date: Date | null) => {
    setValue(field as any, date);
    trigger(field as any);
    console.log("date", date);
  };

  const handleDropdownChange = (field: FieldName, value: string) => {
    setValue(field as any, value);
    trigger(field as any);
  };

  const handleSendOTP = () => {
    // Reset the timer and start the countdown
    setIsOTPSent(true);
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
    <div className="bg-white h-full p-3 shadow-md">
      {/* Personal Detials Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[80px] p-4 mt-5 bg-white rounded-[14px] max-w-sm mx-auto border border-gray-100 shadow-custom">
          <h4 className="title text-lg font-semibold text-gray-400 flex justify-center items-center font-poppins">
            Personal details
          </h4>
          {/* First Name */}
          <div className="mt-5 py-3">
            <Input
              type="text"
              placeholder="First Name"
              value={watch("firstName") || ""}
              onChange={handleChange("firstName")}
              error={errors.firstName?.message}
            />
          </div>

          {/* Last Name */}
          <div className="py-3">
            <Input
              type="text"
              placeholder="Last Name"
              value={watch("lastName") || ""}
              onChange={handleChange("lastName")}
              error={errors.lastName?.message}
            />
          </div>
          {/* Phone Number */}
          <div className="py-3">
            <Input
              type="number"
              placeholder="Phone Number"
              value={watch("mobileNumber") || ""}
              onChange={handleChange("mobileNumber")}
              maxLength={10} // Allow only 10 characters
              error={errors.mobileNumber?.message}
            />
          </div>
          {/* Email Id and Pincode */}
          <div className="py-3 flex flex-row justify-between items-center gap-2.5">
            <Input
              type="text"
              placeholder="Email ID"
              value={watch("email") || ""}
              onChange={handleChange("email")}
              error={errors.email?.message}
            />
            <Input
              type="number"
              placeholder="Pincode"
              value={watch("pincode") || ""}
              onChange={handleChange("pincode")}
              maxLength={6} // Allow only 6 characters
              error={errors.pincode?.message}
            />
          </div>
          {/* Dropdown for Gender & Marital Status */}
          <div className="py-3 flex justify-between items-center gap-2.5">
            <Dropdown
              label="Gender"
              options={["Male", "Female"]}
              selected={watch("gender") || ""}
              onChange={(value) => handleDropdownChange("gender", value)}
              error={errors.gender?.message}
            />
            <Dropdown
              label="Marital Status"
              options={["Married", "Un-Married", "Single"]}
              selected={watch("marritalSatus") || ""}
              onChange={(value) => handleDropdownChange("marritalSatus", value)}
              error={errors.marritalSatus?.message}
            />
          </div>
        </div>

        {/* Pancard Details */}
        <div className="p-4 mt-5 bg-white rounded-[14px] max-w-sm mx-auto border border-gray-100 shadow-custom">
          <h4 className="title text-base font-semibold text-gray-400 flex justify-center items-center font-poppins">
            PAN Card details
          </h4>

          {/* Pan Number */}
          <div className="mt-5 py-3">
            <Input
              type="text"
              placeholder="Pan Number"
              value={watch("panNumber") || ""}
              onChange={handleChange("panNumber")}
              maxLength={10} // Allow only 10 characters
              error={errors.panNumber?.message}
            />
          </div>

          {/* Date of Birth */}
          <div className="py-2">
            <CalendarInput
              label="Select Date"
              value={watch("dob") || null}
              onDateChange={(date: any) => {
                handleDateChange("dob", date);
              }}
              error={errors.dob?.message}
            />
          </div>

          {/* Terms & Conditions */}
          <div className="py-3 flex items-center space-x-2">
            <input
              type="checkbox"
              id="accept"
              checked={watch("terms") || false}
              className="h-4 w-4 border-b-blue rounded focus:ring-0 checked:bg-b-blue checked:border-b-blue"
              onChange={handleCheck("terms")}
            />
            <label htmlFor="accept" className="text-sm text-b-blue">
              I hereby accept the terms and conditions of the Buddyloan
            </label>
          </div>

          {/* Get OTP Button */}
          {!isOTPSent && (
            <div className="py-3 flex justify-center">
              <button
                type="button"
                disabled={!watch("terms")}
                onClick={handleSendOTP}
                className={`w-[200px] py-2 px-2 ${
                  watch("terms")
                    ? "bg-b-blue text-white"
                    : "bg-[#D0D0D0] text-[#919191]"
                } font-poppins text-lg font-semibold rounded-xl`}
              >
                Get OTP
              </button>
            </div>
          )}

          {/* OTP Input*/}
          {isOTPSent && (
            <div className="mt-8 my-4">
              <OtpInput
                isOtp={isOTPSent}
                placeholder="Enter OTP"
                onSendOTP={handleSendOTP}
                otpValue={watch("otp") || ""}
                onChange={handleChange("otp")}
                error={errors.otp?.message}
              />
            </div>
          )}

          {/* Submit Button */}
          {isOTPSent && (
            <div className="py-3 flex justify-center">
              <button
                type="submit"
                className={`w-[200px] py-2 px-2 bg-b-blue text-white font-poppins text-lg font-semibold rounded-xl  ${
                  formData.terms
                    ? "text-white shadow-custom"
                    : "bg-gray opacity-50 cursor-not-allowed"
                }`}
                disabled={!formData.terms}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
