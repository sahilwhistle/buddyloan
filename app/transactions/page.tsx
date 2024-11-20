"use client";
import React, { useState } from "react";
import PaymentsCard from "../../components/common/PaymentsCard";
import Table from "../../components/common/Table";
import BalanceCard from "../../components/common/BalenceCard";
import { FieldName, useFormValidation } from "@/hooks/useFormValidation";
import OtpInput from "@/components/common/OtpInput";

const Transections = () => {
  const [isOTPSent, setIsOTPSent] = useState(false); // Track if OTP has been sent

  // State object to hold all form data
  const [formData, setFormData] = useState({
    bankId: 1,
    otp: "",
  });

  const fields = ["otp"] as any;

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    trigger,
  } = useFormValidation(fields);

  // Handle form field change by updating only the specific field in formData
  const handleChange =
    (field: FieldName) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(field as any, e.target.value);
      trigger(field as any);
    };

  // Handle send otp
  const handleSendOTP = () => {
    // Reset the timer and start the countdown
    setIsOTPSent(true);
  };

  // Handle withdraw
  const handleWithdraw = () => {
    setIsOTPSent(true);
  };

  // Handle toogle
  const handleToggle = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const data = [
    {
      id: 1,
      img: "corporation-bank.png",
      bankName: "Bank of America",
      bankAccountNumber: "XXXXXXXXXX6438",
    },
    {
      id: 2,
      img: "icici-bank.png",
      bankName: "ICICI BANK",
      bankAccountNumber: "XXXXXXXXXX6438",
    },
    {
      id: 3,
      img: "upi-bank.png",
      bankName: "UPI",
      bankAccountNumber: "XXXXXXXXXX6438",
    },
    {
      id: 4,
      img: "upi-bank.png",
      bankName: "UPI",
      bankAccountNumber: "XXXXXXXXXX6438",
    },
  ];

  const tableData = [
    {
      headers: ["Date", "Amount", "Transfer Status"],
      rows: [
        { Date: "2024-11-15", Amount: "$100", "Transfer Status": "Success" },
        { Date: "2024-11-14", Amount: "$200", "Transfer Status": "Pending" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-4 bg-white">
      <div className="max-w-sm mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Header Banner */}
          <BalanceCard
            labelOne="Validated Balance"
            labelOneBalance={150}
            labelTwo="Validated Balance"
            labelTwoBalance={0}
            size="small"
          />

          {/* Heading */}
          <h4 className="py-2 mt-3 mb-2 title text-md font-normal text-gray-400 flex justify-center items-center font-poppins">
            Default Payout Mode
          </h4>
          <div className="w-full overflow-y-auto p-2 bg-white rounded-[14px] max-w-sm mx-auto border border-gray-100 shadow-custom">
            {/* Payments Card With Toggle Button */}
            <PaymentsCard
              data={data}
              selectedBank={formData.bankId}
              handleToggle={(value) => handleToggle("bankId", value)}
            />

            {/* Payout & WUthdraw Buttons*/}
            <div className="flex items-center justify-around gap-[10px] py-2">
              <button
                type="button"
                className="w-full rounded-[15px] bg-[#00A6FF] p-[10px] text-white text-[12px] text-semibold"
              >
                Add Payout Method
              </button>

              <button
                onClick={handleWithdraw}
                className="w-full rounded-[15px] bg-[#2DC36A] p-[10px] text-white text-[12px] text-semibold"
                type="button"
              >
                Withdraw
              </button>
            </div>

            <div className="flex justify-between items-start gap-5 mt-5">
              {/* OTP */}
              {isOTPSent && (
                <OtpInput
                  isOtp={isOTPSent}
                  placeholder="Enter OTP"
                  onSendOTP={handleSendOTP}
                  otpValue={watch("otp") || ""}
                  onChange={handleChange("otp")}
                  error={errors.otp?.message}
                />
              )}

              {/* Submit Button */}
              {isOTPSent && (
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-[120px] py-2 mt-[2px] px-2 bg-b-blue text-white font-poppins text-md font-semibold rounded-xl"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Payment History */}
          <h4 className="py-2 mt-3 mb-2 title text-md font-normal text-gray-400 flex justify-center items-center font-poppins">
            Payment History
          </h4>

          {/* Payment History Table */}
          <Table data={tableData} />
        </form>
      </div>
    </div>
  );
};

export default Transections;
