"use client";
import { useState } from "react";
import React from "react";
import Input from "../../components/forms/Input";
import Dropdown from "../../components/common/Dropdown";
import CalendarInput from "../../components/common/CalendarInput";
import { useFormValidation, FieldName } from "../../hooks/useFormValidation";
import OtpInput from "@/components/common/OtpInput";

const Registration = () => {
  const [isOTPSent, setIsOTPSent] = useState(false); // Track if OTP has been sent

  // Specify only the fields you want to validate
  const fields = [
    "fullName",
    "email",
    "panNumber",
    "pincode",
    "dob",
    "gender",
    "otp",
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

  // Handle OTP sending
  const handleSendOTP = async () => {
    const isEmailValid = await trigger("email" as any);

    if (isEmailValid) {
      setIsOTPSent(true);
    }
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
    <div className="bg-white p-3">
      <h3 className="mt-[80px] font-poppins text-2xl font-semibold leading-[30.88px] text-center text-[#253C82]">
        Registration
      </h3>

      {/* Registration Form */}
      <div className=" p-4 mt-5 bg-white rounded-[14px] max-w-sm mx-auto border border-gray-100 shadow-custom">
        <h4 className="title text-base font-medium text-gray-400 flex justify-center items-center font-poppins">
          Enter your details
        </h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="mt-5 py-3">
            <Input
              type="text"
              placeholder="Full Name"
              value={watch("fullName") || ""}
              onChange={handleChange("fullName")}
              error={errors.fullName?.message}
            />
          </div>

          {/* PAN Number */}
          <div className="py-3">
            <Input
              type="text"
              placeholder="PAN Number"
              value={watch("panNumber") || ""}
              onChange={handleChange("panNumber")}
              maxLength={10} // Allow only 10 characters
              error={errors.panNumber?.message}
            />
          </div>

          {/* Date of Birth */}
          <div className="py-3">
            <CalendarInput
              label="Select Date"
              value={watch("dob") || null}
              onDateChange={(date) => {
                handleDateChange("dob", date);
              }}
              error={errors.dob?.message}
            />
          </div>

          {/* Dropdown for Gender */}
          <div className="py-4">
            <Dropdown
              label="Gender"
              options={["Male", "Female"]}
              selected={watch("gender") || ""}
              onChange={(value) => handleDropdownChange("gender", value)}
              error={errors.gender?.message}
            />
          </div>

          {/* Pincode */}
          <div className="py-3 mt-3">
            <Input
              type="number"
              placeholder="Pincode"
              value={watch("pincode") || ""}
              onChange={handleChange("pincode")}
              maxLength={6} // Allow only 6 characters
              error={errors.pincode?.message}
            />
          </div>

          {/* Email */}
          <div className="py-3">
            <Input
              type="email"
              placeholder="Email"
              value={watch("email") || ""}
              onChange={handleChange("email")}
              error={errors.email?.message}
            />
            <div className="flex flex-col items-end mt-1">
              {!isOTPSent && (
                <span
                  onClick={handleSendOTP}
                  className={`font-poppins text-xs font-medium ${
                    errors.email
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-b-blue cursor-pointer"
                  }`}
                >
                  Send Email OTP
                </span>
              )}
            </div>
          </div>

          {/* OTP input (conditional rendering after OTP is sent) */}
          {isOTPSent && (
            <div className="py-3">
              <OtpInput
                isOtp={isOTPSent}
                placeholder="Email OTP"
                onSendOTP={handleSendOTP}
                otpValue={watch("otp") || ""}
                onChange={handleChange("otp")}
                error={errors.otp?.message}
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="py-3 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-[200px] py-2 px-2 bg-b-blue text-white font-poppins text-lg font-semibold rounded-xl
                ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-opacity-90"
                }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
