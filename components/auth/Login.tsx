"use client";
import React, { useEffect, useState } from "react";
import Input from "../forms/Input";
import Link from "next/link";
import { FieldName, useFormValidation } from "@/hooks/useFormValidation";
import { IMAGE_PATH } from "@/constants/constants";
import OtpInput from "../common/OtpInput";

const Login = () => {
  const [isOTPSent, setIsOTPSent] = useState(false); // Track if OTP has been sent

  // Specify only the fields you want to validate
  const fields = ["mobileNumber", "otp", "terms"] as any;

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

  const handleSendOTP = () => {
    // Reset the timer and start the countdown
    setIsOTPSent(true);
  };

  // Handle form checkbox field change by updating only the specific field in formData
  const handleCheck =
    (field: FieldName) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(field as any, e.target.checked); // Use e.target.checked for checkboxes
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
    <div
      style={{
        background:
          "radial-gradient(97.08% 43.69% at 57.92% 53.69%, #FFFFFF 0%, #47B6F2 100%)",
      }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="mx-auto max-w-sm bg-white p-4 rounded-[20px] shadow-lg w-full sm:w-96 mx-2">
        <div className="flex justify-center my-4 pb-3">
          <Link href={"/"}>
            <img
              src={`${IMAGE_PATH}/buddyloan.png`}
              width={150}
              height={50}
              className="w-[150px] h-[60px]"
              alt="buddyLoan"
            />
          </Link>
        </div>
        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Mobile Number */}
          <div className="py-2">
            <Input
              type="number"
              placeholder="Mobile Number"
              value={watch("mobileNumber") || ""}
              onChange={handleChange("mobileNumber")}
              maxLength={10}
              error={errors.mobileNumber?.message}
            />
          </div>
          {/* OTP Input */}
          <div className="py-3">
            <OtpInput
              isOtp={isOTPSent}
              placeholder="Enter OTP"
              onSendOTP={handleSendOTP}
              otpValue={watch("otp") || ""}
              onChange={handleChange("otp")}
              error={errors.otp?.message}
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center space-x-2 px-4">
            <input
              type="checkbox"
              id="accept"
              checked={watch("terms") || false}
              className="h-4 w-4 border-b-blue mr-2 rounded focus:ring-0 checked:bg-b-blue checked:border-b-blue"
              onChange={handleCheck("terms")}
            />
            <label htmlFor="accept" className="text-xs text-b-blue">
              I hereby accept the terms and conditions of the Buddyloan
            </label>
          </div>

          <div className="flex justify-center items-center pt-2">
            <button
              type="submit"
              className={`px-4 py-2 bg-gray-600 mt-5 w-[200px] rounded-[10px] font-semibold transition duration-300 ease-in-out
                 ${
                   formData.terms
                     ? "bg-gradient-to-b from-[#47B6F2] to-[#00669D] text-white shadow-custom"
                     : "bg-gray opacity-50 cursor-not-allowed"
                 }
              `}
              disabled={!formData.terms}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
