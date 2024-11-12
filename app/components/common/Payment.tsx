"use client";
import React, { useState } from "react";
import bankData from "@/app/mock/paymentdata";

const Payments = () => {
  const [selectedBank, setSelectedBank] = useState(null);

  const handleToggle = (id:any) => {
    // If the same bank is clicked again, uncheck it; otherwise, select it
    setSelectedBank(selectedBank === id ? null : id);
  };

  return (
    <>
      <div className="mx-auto w-full max-w-[428px] rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
        <div className="p-4">
          <div className="mx-auto mt-[10%] flex h-[20vh] w-full items-center justify-around rounded-[35px] bg-[#00A6FF] shadow-[0px_0px_4px_0px_#00000040]">
            <p className="text-center text-[15px] leading-[50px] text-white">
              Validated Balance <br />
              <span className="text-[30px] font-extrabold">₹150</span>
            </p>
            {/* Vertical line */}
            <div className="mx-4 h-24 border-l-2 border-white"></div>
            <p className="text-center text-[15px] leading-[50px] text-white">
              Reviewing Balance <br />
              <span className="text-[30px] font-extrabold">₹0</span>
            </p>
          </div>
        </div>

        <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {bankData.map((data) => (
                <li
                  key={data.id}
                  className="mb-[20px] rounded-[10px] bg-[rgba(220,242,253,1)] p-[20px] py-3 sm:py-4"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={data.imageUrl}
                        alt={`${data.bankName} logo`}
                      />
                    </div>
                    <div className="ms-4 min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {data.bankName}
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        {data.bankAccountNumber}
                      </p>
                    </div>

                    <label className="ms-4 inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        value={data.id}
                        checked={selectedBank === data.id}
                        onChange={() => handleToggle(data.id)}
                        className="peer sr-only"
                      />
                      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-around gap-[10px]">
          <button className="mt-[5%] w-[55%] rounded-[15px] bg-[#00A6FF] p-[10px] text-white">
            Add Payout Method
          </button>
          <button className="mt-[5%] w-[55%] rounded-[15px] bg-[#2DC36A] p-[10px] text-white">
            Withdraw
          </button>
        </div>

        <p className="mt-[5%] items-center gap-[10px] rounded-[50px] p-[10px] text-center text-[20px] text-gray-500">
          Payment History
        </p>

        <button className="w-full rounded-[30px] bg-gradient-to-r from-[#6F89D6] to-[#243B81] p-[15px] text-[#fff]">
          Date | Amount | Transfer Status
        </button>

        <div className="mt-[5%] h-[20vh] w-full rounded-[20px] bg-white p-[23px] text-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
          No History Found
        </div>
      </div>
    </>
  );
};

export default Payments;
