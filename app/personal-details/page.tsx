"use client";
import { useState, useEffect } from "react";
import React from "react";
import Input from "../components/forms/Input";
import Dropdown from "../components/common/Dropdown";
import CalendarInput from "../components/common/Calendarinput";

const PersonalDetails = () => {
  // State object to hold all form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dob: "",
    panNumber: "",
    gender: "",
    maritalStatus: "",
    pincode: "",
    email: "",
    terms: "",
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

  // Handle form chjeckbox field change by updating only the specific field in formData
  const handleCheck =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.checked,
      });
    };

  // Callback to handle date change
  const handleDateChange = (field: string, date: Date | null) => {
    setFormData({
      ...formData,
      [field]: date,
    });
  };

  const handleDropdownChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
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

    // Log the collected form data to the console
    console.log("Form Submitted with the following data:", formData);
  };

  return (
    <div className="bg-white h-full p-3 shadow-md">
      {/* Personal Detials Form */}
      <form onSubmit={handleSubmit}>
        <div className="mt-[80px] p-4 mt-5 bg-white rounded-[14px] max-w-sm mx-auto border border-gray-100 shadow">
          <h4 className="title text-lg font-semibold text-gray-400 flex justify-center items-center font-poppins">
            Personal details
          </h4>
          method
          {/* Full Name */}
          <div className="mt-5 py-3">
            <Input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange("firstName")}
            />
          </div>
          {/* Last Name */}
          <div className="py-3">
            <Input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange("lastName")}
            />
          </div>
          {/* Phone Number */}
          <div className="py-3">
            <Input
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange("phoneNumber")}
            />
          </div>
          {/* Email Id and Pincode */}
          <div className="py-3 flex flex-row justify-between items-center gap-2.5">
            <Input
              type="text"
              placeholder="Email Id"
              value={formData.email}
              onChange={handleChange("email")}
            />
            <Input
              type="text"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange("pincode")}
            />
          </div>
          {/* Dropdown for Gender & Marital Status */}
          <div className="py-3 flex justify-between items-center gap-2.5">
            <Dropdown
              label="Gender"
              options={["Male", "Female"]}
              selected={formData.gender}
              onChange={(value) => handleDropdownChange("gender", value)}
              error={
                submitted && formData.gender === ""
                  ? "Please select a tenure"
                  : undefined
              }
            />
            <Dropdown
              label="Marital Status"
              options={["Married", "Un-Married", "Single"]}
              selected={formData.maritalStatus}
              onChange={(value) => handleDropdownChange("maritalStatus", value)}
              error={
                submitted && formData.maritalStatus === ""
                  ? "Please select a tenure"
                  : undefined
              }
            />
          </div>
        </div>

        {/* Pancard Details */}
        <div className="p-4 mt-5 bg-white rounded-[14px] max-w-sm mx-auto border border-gray-100 shadow">
          <h4 className="title text-base font-semibold text-gray-400 flex justify-center items-center font-poppins">
            PAN Card details
          </h4>

          {/* Pan Number */}
          <div className="mt-5 py-3">
            <Input
              type="text"
              placeholder="PAN number"
              value={formData.panNumber}
              onChange={handleChange("panNumber")}
            />
          </div>

          {/* Date of Birth */}
          <div className="py-3">
            <CalendarInput
              label="Select Date"
              onDateChange={(date) => {
                handleDateChange("dob", date);
              }}
            />
          </div>

          {/* Terms & Conditions */}
          <div className="py-3 flex items-center space-x-2">
            <input
              type="checkbox"
              id="accept"
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
                type="submit"
                className={`w-[200px] py-2 px-2 ${
                  formData.terms
                    ? "bg-b-blue text-white"
                    : "bg-[#D0D0D0] text-[#919191]"
                } font-poppins text-lg font-semibold rounded-xl`}
                onClick={handleSendOTP}
                disabled={!formData.terms}
              >
                Get OTP
              </button>
            </div>
          )}

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
            <div className="py-3 flex justify-center">
              <button
                type="submit"
                className="w-[200px] py-2 px-2 bg-b-blue text-white font-poppins text-lg font-semibold rounded-xl"
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
