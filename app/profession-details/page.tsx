"use client";
import React, { useState } from "react";
import Input from "../components/forms/Input";
import ToggleButtonGroup from "../components/common/ToggleButton";
import Dropdown from "../components/common/Dropdown";
import YesNoRadioButton from "../components/common/YesNoRadioButton";

const ProfessionDetails = () => {
  const [select, setSelect] = useState("salaried");
  // State object to hold all form data
  const [formData, setFormData] = useState({
    name: "",
    upiId: "",
    mobileNumber: "",
    accountNumber: "",
    beneficiaryName: "",
    dob: "",
    selectedOption: "",
    accNumber: "",
    ifscNumber: "",
    experience: "",
    companyType: "",
    bussinessProf: "",
    gstAvailable: "",
  });
  console.log(formData.gstAvailable);

  const [submitted, setSubmitted] = useState(false); // Track form submission

  // Handle form field change by updating only the specific field in formData
  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };

  // Handle form field change by updating only the specific field in formData
  const handleRadioChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const options = [
    { label: "Salaried", value: "salaried" },
    { label: "Self Employed", value: "self-employed" },
  ];

  const handleSelectionChange = (value: string) => {
    setSelect(value);
  };

  const handleDropdownChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Handle form submission and log the collected data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Log the collected form data to the console
    console.log("Form Submitted with the following data:", formData);
  };

  return (
    <div
      className={`${select === "upi" ? "h-[100vh]" : "h-full"} p-4 bg-white`}
    >
      {/* UPI Form */}
      <div className="mt-[80px] w-full overflow-y-auto py-3 px-4 bg-white rounded-[14px] max-w-sm mx-auto border border-gray-100 shadow">
        <h4 className="title text-lg font-semibold text-gray-400 flex justify-center items-center font-poppins">
          Profession details
        </h4>

        <div className="mt-[30px] my-3 max-w-sm mx-auto">
          <ToggleButtonGroup
            options={options}
            selectedValue={select}
            setSelectedValue={handleSelectionChange}
          />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Salaried */}
          {select === "salaried" ? (
            <>
              {/* Company Name */}
              <div className="mt-5 py-3">
                <Input
                  type="text"
                  placeholder="Company Name"
                  value={formData.upiId}
                  onChange={handleChange("upiId")}
                />
              </div>

              {/* Email ID */}
              <div className="py-3">
                <Input
                  type="text"
                  placeholder="Office Email Id"
                  value={formData.upiId}
                  onChange={handleChange("upiId")}
                />
              </div>

              {/* Monthly Income */}
              <div className="py-3">
                <Input
                  type="text"
                  placeholder="Monthly Income"
                  value={formData.mobileNumber}
                  onChange={handleChange("mobileNumber")}
                />
              </div>

              {/* Compnay Address*/}
              <div className="py-3">
                <Input
                  type="text"
                  placeholder="Compnay Address"
                  value={formData.mobileNumber}
                  onChange={handleChange("mobileNumber")}
                />
              </div>

              {/* Compnay PIN Code*/}
              <div className="py-3">
                <Input
                  type="text"
                  placeholder="Compnay PIN Code"
                  value={formData.mobileNumber}
                  onChange={handleChange("mobileNumber")}
                />
              </div>

              {/* Total Work Experience*/}
              <div className="py-2">
                <Dropdown
                  label="Total work experience"
                  options={["<2 years", "2-5 years", ">5 years"]}
                  selected={formData.experience}
                  onChange={(value) =>
                    handleDropdownChange("experience", value)
                  }
                  error={
                    submitted && formData.selectedOption === ""
                      ? "Please select a option"
                      : undefined
                  }
                />
              </div>
            </>
          ) : (
            <>
              {/* Dropdown for Company Type */}\
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
                  onChange={(value) =>
                    handleDropdownChange("companyType", value)
                  }
                  error={
                    submitted && formData.selectedOption === ""
                      ? "Please select a tenure"
                      : undefined
                  }
                />
              </div>
              {/* Yes/No Buttons */}
              <div className="py-2 text-center">
                <span className="text-[#A8A7A7]">
                  Do you have business registration proof?
                </span>
                <div className="mt-3">
                  <YesNoRadioButton
                    value={formData.bussinessProf}
                    onChange={(value) =>
                      handleRadioChange("bussinessProf", value)
                    }
                  />
                </div>
              </div>
              {/* Registration Id */}
              <div className="mt-5 py-3">
                <Input
                  type="text"
                  placeholder="Registration ID"
                  value={formData.accountNumber} // Corrected to panNumber
                  onChange={handleChange("accountNumber")} // Corrected to panNumber
                />
              </div>
              {/* Annual Turnover */}
              <div className="py-3">
                <Input
                  type="text"
                  placeholder="Annual Turnover"
                  value={formData.accountNumber} // Corrected to panNumber
                  onChange={handleChange("accountNumber")} // Corrected to panNumber
                />
              </div>
              {/* Dropdown for your bussiness */}
              <div className="py-2">
                <Dropdown
                  label="How old is your bussiness?"
                  options={["<2 years", "2-5 years", ">5 years"]}
                  selected={formData.experience}
                  onChange={(value) =>
                    handleDropdownChange("bussinessExperience", value)
                  }
                  error={
                    submitted && formData.selectedOption === ""
                      ? "Please select a option"
                      : undefined
                  }
                />
              </div>
              {/* Yes/No Buttons  */}
              <div className="py-2">
                <div className="relative mt-3">
                  <YesNoRadioButton
                    value={formData.gstAvailable}
                    extraLabel={"GST Available:"}
                    onChange={(value) =>
                      handleRadioChange("gstAvailable", value)
                    }
                  />
                </div>
              </div>
              {/* Annual Turnover */}
              <div className="mt-5 py-3">
                <Input
                  type="text"
                  placeholder="GST Number"
                  value={formData.accountNumber} // Corrected to panNumber
                  onChange={handleChange("accountNumber")} // Corrected to panNumber
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="mt-[20px] py-3 flex justify-center">
            <button
              type="submit"
              className="w-[200px] py-[12px] px-4 bg-b-blue text-white font-poppins text-lg font-semibold rounded-[18px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfessionDetails;
