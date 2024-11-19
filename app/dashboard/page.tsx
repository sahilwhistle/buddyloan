"use client";
import React from "react";
import FeaturesCard from "../../components/common/FeaturesCard";
import DonutChart from "../../components/common/DonutChart";

const Dashboard = () => {
  const chartsData = {
    labels: [
      "Loan Approved",
      "Loan Disbursal",
      "Loan Approval Pending",
      "Loan Rejected",
    ],
    datasets: [
      {
        label: "Loan Status",
        data: [40, 25, 20, 15], // Example data
        backgroundColor: ["#243B81", "#8B5CF6", "#FB923C", "#EF4444"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="min-h-screen p-2 bg-white overflow-auto">
      <div className="max-w-sm mx-auto mt-[80px]">
        {/* Create Lead Card */}
        <div className="shadow-custom bg-white rounded-[15px] p-5 mb-[20px]">
          <div className="bg-[#00A6FF] p-5 rounded-[15px] flex justify-between items-center">
            <span className="ps-4 text-sm text-white font-bold">
              Create Lead
            </span>
            <button className="bg-white text-[10px] text-[#00A6FF] rounded-md py-[6px] px-4">
              Create New Application +
            </button>
          </div>
        </div>
        <div className="shadow-custom p-4 rounded-[16px] bg-[#47B6F226]">
          {/* Price cards */}
          <div className="mb-[25px] text-center bg-gradient-to-r h-[60px] from-[#6F89D6] to-[#243B81] shadow-custom rounded-[15px] ps-[60px] px-[30px] flex justify-between items-center">
            <span className="text-center font-bold font-poppins text-sm uppercase">
              My Earning
            </span>

            <span className="text-[36px] font-bold text-[#FFDD00] flex items-baseline">
              ₹1,210
            </span>
          </div>

          <div className="mb-[25px] bg-gradient-to-r h-[60px] from-[#6F89D6] to-[#243B81] shadow-custom rounded-[15px] ps-[40px] px-[30px] flex justify-between items-center">
            <span className="text-center font-bold font-poppins text-sm uppercase">
              Total <br /> Leads Generated
            </span>

            <span className="text-[36px] font-bold text-[#FFDD00] flex items-baseline">
              210
            </span>
          </div>

          {/* Charts */}
          <div className="mt-4 rounded-lg border-2 border-[#243B81] bg-white ps-2 p-4 shadow-md">
            <div className="flex items-center justify-between gap-4">
              {/* Donut Chart */}
              <div className="w-1/2">
                <DonutChart data={chartsData} />
              </div>
              <div className="w-1/2">
                <h2 className="text-xl font-semibold text-[#243B81]">
                  Loan Status
                </h2>

                {/* Chart Lables  */}
                <ul className="mt-4">
                  {chartsData.labels.map((label, index) => (
                    <li
                      key={label}
                      className="mb-2 flex text-[10px] text-black items-center"
                    >
                      <span
                        className="mr-2 text-black inline-block size-4 rounded-[2px]"
                        style={{
                          backgroundColor:
                            chartsData.datasets[0].backgroundColor[index],
                        }}
                      ></span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Features Cards */}
        <FeaturesCard
          img="rupees.png"
          message="Earn extra 1% on disbursal today"
        />

        <FeaturesCard
          img="tata.png"
          message="New Partner Tata Capital Added in lender list with record disbursal TAT of 10 mins."
          text="small"
        />
      </div>
    </div>
  );
};

export default Dashboard;
