import React from "react";
import LoanStatusChart from "../components/common/LoanStatusChart";
import FeaturesCard from "../components/common/FeaturesCard";

const Dashboard = () => {
  const loanSeries = [50, 25, 13, 12];
  const loanLabels = [
    "Loan Approved",
    "Loan Disbursal",
    "Loan Approval Pending",
    "Loan Rejected",
  ];

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
          <LoanStatusChart
            title="Loan Status Overview"
            series={loanSeries}
            labels={loanLabels}
            colors={["#0029BF", "#8E0E8B", "#FF8400", "#F20000"]} // Optional custom colors
          />
        </div>
        {/* Features Cards */}
        <FeaturesCard
          img="/assets/img/rupees.png"
          message="Earn extra 1% on disbursal today"
        />

        <FeaturesCard
          img="/assets/img/tata.png"
          message="New Partner Tata Capital Added in lender list with record disbursal TAT of 10 mins."
          text="small"
        />
      </div>
    </div>
  );
};

export default Dashboard;
