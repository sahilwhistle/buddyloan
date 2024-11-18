"use client";
import React, { useState } from "react";
import Input from "../components/forms/Input";
import CalendarInput from "../components/common/CalendarInput";
import Dropdown from "../components/common/Dropdown";
import { FieldName, useFormValidation } from "../hooks/useFormValidation";

const EditProfile = () => {
  // Specify only the fields you want to validate
  const fields = ["fullName", "email", "panNumber", "dob", "gender"] as any;

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

  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };
  return (
    <div className="bg-white p-3 shadow-md">
      <div className="mt-[80px] p-4 mt-5 bg-white rounded-[14px] max-w-sm mx-auto border border-gray-100 shadow-custom">
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

          {/* Email */}
          <div className="py-3 mt-3">
            <Input
              type="email"
              placeholder="Email"
              value={watch("email") || ""}
              onChange={handleChange("email")}
              error={errors.email?.message}
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
