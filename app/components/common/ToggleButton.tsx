import React from 'react';

interface ToggleButtonGroupProps {
  selectedMethod: 'salaried' | 'selfEmployed';
  setSelectedMethod: (method: 'salaried' | 'selfEmployed') => void;
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({ selectedMethod, setSelectedMethod}) => {
  return (
    <div className="mb-6 flex justify-center border-[1px] bg-white border-blue rounded-[30px] border-[#253C82] h-[55px] w-[30%]">
      <div
        onClick={() => setSelectedMethod("salaried")}
        className={`font-bold w-[250px] cursor-pointer rounded-l-full rounded-r-full px-4 py-3 ${
          selectedMethod === "salaried"
            ? "text-center bg-gradient-to-r from-[#6F89D6] to-[#243B81] text-white-500"
            : "text-center bg-white text-[#253C82]"
        }`}
      >
        Salaried
      </div>
      <div
        onClick={() => setSelectedMethod("selfEmployed")}
        className={`font-bold w-[250px] cursor-pointer rounded-l-full rounded-r-full px-4 py-3 ${
          selectedMethod === "selfEmployed"
            ? "text-center bg-gradient-to-r from-[#6F89D6] to-[#243B81] text-white-500"
            : "text-center bg-white text-[#253C82]"
        }`}
      >
        Self Employed
      </div>
    </div>
  );
};

export default ToggleButtonGroup;

