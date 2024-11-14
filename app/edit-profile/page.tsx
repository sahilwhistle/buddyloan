"use client";
import React, { useState } from "react";
import Input from "../components/forms/Input";
import CalendarInput from "../components/common/Calendarinput";
import Dropdown from "../components/common/Dropdown";

const EditProfile = () => {
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

  // Handle form field change by updating only the specific field in formData
  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  // Callback to handle date change
  const handleDateChange = (field: string, date: Date | null) => {
    setFormData({
      ...formData,
      [field]: date,
    });
  };

  const handleDropdownChange = (value: string) => {
    setFormData({
      ...formData,
      selectedOption: value,
    });
  };

  // Handle form submission and log the collected data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Log the collected form data to the console
    console.log("Form Submitted with the following data:", formData);
  };
  return (
    <div className="bg-white p-3 shadow-md">
      <div className="mt-[80px] p-4 mt-5 bg-white rounded-[14px] max-w-sm mx-auto border border-gray-100 shadow">
        <h3 className="font-poppins mt-2 text-2xl font-semibold leading-[30.88px] text-center text-[#253C82]">
          Edit Profile
        </h3>

        <div className="flex items-center justify-center mt-[30px] mb-8">
          <div className="relative h-[140px] w-[140px]">
            {/* Profile img */}
            <img
              src="/assets/img/edit-profile.png"
              className="h-[140px] w-[140px]"
            />
            {/* Camera img */}
            <img
              src="/assets/img/camera.png"
              className=" h-[34.41px] w-[34.41px] absolute bottom-[0px] right-[0px]"
            />
          </div>
        </div>

        {/* Edit Profile Form */}
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
            <CalendarInput
              label="Date of Birth"
              onDateChange={(date) => {
                handleDateChange("dob", date);
              }}
            />
          </div>

          {/* Dropdown for Gender */}
          <div className="py-4">
            <Dropdown
              label="Gender"
              options={["Male", "Female"]}
              selected={formData.selectedOption}
              onChange={handleDropdownChange}
            />
          </div>

          {/* Email */}
          <div className="py-3 mt-3">
            <Input
              type="text"
              placeholder="Email"
              value={formData.pincode}
              onChange={handleChange("email")}
            />
          </div>

          {/* Submit Button */}
          <div className="py-3 flex justify-center">
            <button
              type="submit"
              className="w-[200px] py-2 px-2 bg-b-blue text-white font-poppins text-lg font-semibold rounded-xl"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
