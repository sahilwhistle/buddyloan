"use client";
import { IMAGE_PATH } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AppCardProps {
  data: any;
}

const CardDetail: React.FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => {
  if (!value) return null; // Don't render anything if no value

  return (
    <div className="mb-3">
      <div className="text-[#000000] font-semibold text-[12px] sm:text-[14px]">
        {label}:
      </div>
      <div className="font-normal text-[#000000] text-[12px] sm:text-[14px]">
        {value}
      </div>
    </div>
  );
};

const AppCard: React.FC<AppCardProps> = ({ data }) => {
  return (
    <>
      {data?.map((item: any, index: number) => {
        const {
          img,
          company,
          updateDate,
          loanAmount,
          rateOfInterest,
          loanTenure,
          applicationDate,
        } = item;

        return (
          <div
            key={index}
            className="rounded-[10px] overflow-hidden shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] my-3"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#FFC87A] flex justify-between p-1 items-center pe-3">
              <div>
                <img
                  width={90}
                  height={90}
                  alt="Company Icons"
                  src={`${IMAGE_PATH}/${img}`}
                  className="rounded-full sm:w-[50px] sm:h-[50px] w-[45px] h-[45px]"
                />
              </div>
              <div className="text-[#070707] text-lg font-[600]">{company}</div>
              <div className="flex justify-center items-center">
                <span className="text-[#070707] sm:text-[14px] text-[12px] font-normal flex justify-center items-center">
                  Updated On: {updateDate}
                </span>
                <span className="ml-2 mt-[-2px] cursor-pointer">
                  <img
                    width={14}
                    height={14}
                    src={`${IMAGE_PATH}/reload.png`}
                    className="w-[16px] h-[16px]"
                    alt="Refresh Icon"
                  />
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex justify-between p-2 px-4">
              <div className="flex flex-col gap-[10px]">
                <CardDetail label="Loan Amount" value={loanAmount} />
                <CardDetail label="Application Date" value={applicationDate} />
              </div>
              <div className="flex flex-col gap-[10px]">
                <CardDetail label="Loan Tenure" value={loanTenure} />
                <CardDetail label="Rate Of Interest" value={rateOfInterest} />
              </div>
            </div>

            {/* Card Bottom */}
            <div className="flex justify-between p-2 items-center">
              <Link
                href={"/refer"}
                className="text-[#00A6FF] font-medium text-[9px] sm:text-[12px]"
              >
                Refer Document
              </Link>
              <button className="flex justify-center items-center text-center bg-[linear-gradient(90deg,_#FFC87A_0%,_#FFFFFF_100%)] text-black px-4 py-1 rounded-full text-[10px] border border-[#F9A61A]">
                Accept Journey Not Started
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AppCard;
