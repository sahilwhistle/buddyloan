"use client";
import React, { useState } from "react";
import ToggleButtonGroup from "../../components/common/ToggleButton";
import SalariedDetails from "../../components/Elements/ProfessionDetails/SalariedDetails";
import SelfEmployedDetails from "../../components/Elements/ProfessionDetails/SelfEmployedDetails";

const ProfessionDetails: React.FC = () => {
  const [select, setSelect] = useState("salaried");

  const handleSelectionChange = (value: string) => setSelect(value);

  const options = [
    { label: "Salaried", value: "salaried" },
    { label: "Self Employed", value: "self-employed" },
  ];

  return (
    <div className="min-h-screen p-4 bg-white">
      <div className="mt-[80px] w-full overflow-y-auto py-3 px-4 bg-white rounded-[14px] max-w-sm mx-auto border border-gray-100 shadow-custom">
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
        {select === "salaried" ? <SalariedDetails /> : <SelfEmployedDetails />}
      </div>
    </div>
  );
};

export default ProfessionDetails;
