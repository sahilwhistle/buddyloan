"use client";
import React from "react";

interface PaymentsToggleProps {
  data: {
    id: any;
    img: string;
    bankName: string;
    bankAccountNumber: string;
  }[];
  selectedBank: string | null;
  handleToggle: (id: string) => void;
}

const PaymentsToggle: React.FC<PaymentsToggleProps> = ({
  data,
  selectedBank,
  handleToggle,
}) => {
  return (
    <div>
      <ul role="list">
        {data.map((bank) => (
          <li
            key={bank.id}
            className="mb-[10px] rounded-[10px] bg-[rgba(220,242,253,1)] py-2 ps-4 pe-3 border border-gray-200"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-14 w-14 rounded-[4px]"
                  src={bank.img}
                  alt={`${bank.bankName} logo`}
                />
              </div>
              <div className="ms-4 min-w-0 flex-1">
                <p className="truncate text-md font-semibold text-black">
                  {bank.bankName}
                </p>
                <p className="truncate text-xs text-[#5F5F5F]">
                  {bank.bankAccountNumber}
                </p>
              </div>

              <label className="ms-4 inline-flex flex-col cursor-pointer items-center">
                <span className="text-black text-[10px] text-#5F5F5F">
                  Set Default
                </span>
                <input
                  type="checkbox"
                  value={bank.id}
                  checked={selectedBank === bank.bankName}
                  onChange={() => handleToggle(bank.bankName)}
                  className="peer sr-only w-3 h-3 border border-transparent rounded-sm appearance-none checked:bg-red-500 checked:border-red-500 focus:ring-0"
                />

                <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentsToggle;
