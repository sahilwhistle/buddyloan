"use client";
import React, { useEffect, useState } from "react";
import Input from "../../components/forms/Input";
import PaymentsCard from "../../components/common/PaymentsCard";
import Table from "../../components/common/Table";
import BalanceCard from "../../components/common/BalenceCard";

const Transections = () => {
  const [isOTPSent, setIsOTPSent] = useState(false); // Track if OTP has been sent
  const [timer, setTimer] = useState(10); // 10-second timer
  const [isTimerActive, setIsTimerActive] = useState(false); // Track if timer is active

  // State object to hold all form data
  const [formData, setFormData] = useState({
    otp: "",
    bankName: "",
  });

  // Start countdown timer after OTP is sent
  useEffect(() => {
    if (isTimerActive && timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      // Cleanup interval on unmount or when timer ends
      return () => clearInterval(intervalId);
    }

    if (timer === 0) {
      setIsTimerActive(false);
    }
  }, [isTimerActive, timer, isOTPSent]);

  // Handle form field change by updating only the specific field in formData
  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  const handleSendOTP = () => {
    // Reset the timer and start the countdown
    setIsOTPSent(true);
    setTimer(15); // reset timer to 15 seconds
    setIsTimerActive(true);
  };

  const handleAddPaymentMethod = () => {
    setIsOTPSent(true);
    setTimer(15);
    setIsTimerActive(true);
  };

  const handleToggle = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData); // Log collected form data
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
          {/* Payments Toggle Button */}
          <PaymentsCard
            data={data}
            selectedBank={formData.bankName}
            handleToggle={(value) => handleToggle("bankName", value)}
          />

          {/* Buttons */}
          <div className="flex items-center justify-around gap-[10px] py-2">
            <button
              className="w-full rounded-[15px] bg-[#00A6FF] p-[10px] text-white text-[12px] text-semibold"
              onClick={handleAddPaymentMethod}
            >
              Add Payout Method
            </button>
            <button className="w-full rounded-[15px] bg-[#2DC36A] p-[10px] text-white text-[12px] text-semibold">
              Withdraw
            </button>
          </div>

          <div className="flex justify-between items-center gap-5">
            {/* Email OTP */}
            {isOTPSent && (
              <div className="mt-5 py-3">
                <Input
                  type="text"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange("otp")}
                />
                <div className="flex flex-col items-end mt-1">
                  {isTimerActive ? (
                    <>
                      <div className="flex flex-col items-center mt-1">
                        <span className="font-poppins text-xs font-medium text-b-blue mt-1 text-center">
                          {timer}s
                        </span>
                        <span className="font-poppins text-xs font-medium text-gray-500">
                          Re-send Email OTP
                        </span>
                      </div>
                    </>
                  ) : (
                    <span
                      onClick={handleSendOTP}
                      className="font-poppins text-xs font-medium text-b-blue cursor-pointer"
                    >
                      Send Email OTP
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Submit Button */}
            {isOTPSent && (
              <div className="flex justify-center mt-[-12px]">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-[120px] py-3 px-2 bg-b-blue text-white font-poppins text-md font-semibold rounded-xl"
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
      </div>
    </div>
  );
};

export default Transections;
