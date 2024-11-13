"use client";
import { useState, useEffect } from "react";
import React from "react";
import Input from "../components/forms/Input";
import Dropdown from "../components/common/Dropdown";
import Button from "../components/forms/Button";

const Registration = () => {
  // State object to hold all form data
  const [formData, setFormData] = useState({
    fullName: "",
    panNumber: "",
    dob: "",
    selectedOption: "",
    pincode: "",
    state: "",
    city: "",
    email: "",
    otp: "",
  });

  const [isOTPSent, setIsOTPSent] = useState(false); // Track if OTP has been sent
  const [timer, setTimer] = useState(10); // 10-second timer
  const [isTimerActive, setIsTimerActive] = useState(false); // Track if timer is active
  const [submitted, setSubmitted] = useState(false); // Track form submission

  // Handle form field change by updating only the specific field in formData
  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  const handleDropdownChange = (value: string) => {
    setFormData({
      ...formData,
      selectedOption: value,
    });
  };

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
  }, [isTimerActive, timer]);

  const handleSendOTP = () => {
    // Reset the timer and start the countdown
    setIsOTPSent(true);
    setTimer(15); // reset timer to 15 seconds
    setIsTimerActive(true);
  };

  // Handle form submission and log the collected data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Log the collected form data to the console
    console.log("Form Submitted with the following data:", formData);
  };

  return (
    <div className="bg-white p-3 shadow-md">
      <h3 className="mt-[80px] font-poppins text-2xl font-semibold leading-[30.88px] text-center text-[#253C82]">
        Registration
      </h3>

      {/* Registration Form */}
      <div className="reg-form-wrapper p-4 mt-5 bg-white rounded-lg">
        <h4 className="title text-base font-medium text-gray-400 flex justify-center items-center font-poppins">
          Enter your details
        </h4>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mt-5 py-3">
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange("fullName")}
            />
          </div>

          {/* PAN Number */}
          <div className="py-3">
            <Input
              type="text"
              placeholder="PAN Number"
              value={formData.panNumber}
              onChange={handleChange("panNumber")}
            />
          </div>

          {/* Date of Birth */}
          <div className="py-3">
            <Input
              type="date"
              placeholder="Calendar"
              value={formData.dob}
              onChange={handleChange("dob")}
            />
          </div>

          {/* Dropdown for Tenure */}
          <div className="py-2">
            <Dropdown
              label="Select Tenure"
              options={["Option 1", "Option 2", "Option 3"]}
              selected={formData.selectedOption}
              onChange={handleDropdownChange}
              error={
                submitted && formData.selectedOption === ""
                  ? "Please select a tenure"
                  : undefined
              }
            />
          </div>

          {/* Pincode */}
          <div className="py-3 mt-3">
            <Input
              type="number"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange("pincode")}
            />
          </div>

          {/* State and City */}
          <div className="py-3 flex flex-row justify-between items-center gap-2.5">
            <Input
              type="text"
              placeholder="State"
              value={formData.state}
              onChange={handleChange("state")}
            />
            <Input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleChange("city")}
            />
          </div>

          {/* Email */}
          <div className="py-3">
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange("email")}
            />
            <div className="flex flex-col items-end mt-1">
              {isTimerActive ? (
                <>
                  <div className="flex flex-col items-center mt-1">
                    <span className="font-poppins text-xs font-medium text-email-blue mt-1 text-center">
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
                  className="font-poppins text-xs font-medium text-email-blue cursor-pointer"
                >
                  Send Email OTP
                </span>
              )}
            </div>
          </div>

          {/* OTP input (conditional rendering after OTP is sent) */}
          {isOTPSent && (
            <div className="py-3">
              <Input
                type="text"
                placeholder="Email OTP"
                value={formData.otp}
                onChange={handleChange("otp")}
              />
            </div>
          )}

          {/* Submit Button */}
          {/* <div>
            <Button label="submit" type="submit" />
          </div> */}
          <div className="py-3 flex justify-center">
            <button
              type="submit"
              className="w-[200px] py-4 px-4 bg-email-blue text-white font-poppins text-sm font-semibold rounded-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
