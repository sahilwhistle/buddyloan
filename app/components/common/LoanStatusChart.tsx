"use client";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically load ApexCharts to avoid SSR issues in Next.js
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface LoanStatusChartProps {
  title: string;
  series: number[]; // The values of the chart in percentages.
  labels: string[]; // The labels for the chart.
  colors?: string[]; // Optional: Custom colors for the chart.
}

const LoanStatusChart: React.FC<LoanStatusChartProps> = ({
  title,
  series,
  labels,
  colors = ["#4A00E0", "#7A0DE0", "#FFA500", "#FF4500"], // Default colors
}) => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
      height: 200,
    },
    labels: labels,
    colors: colors,
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
    },
    legend: {
      show: false, // Hide the default legend
    },
  };

  return (
    <div className="w-full text-center">
      <div className="flex justify-arround items-center bg-white border-2 overflow-hidden rounded-[20px] border-[#243B81]">
        {/* Chart */}
        <div className="flex justify-center items-center h-[180px] w-[180px]">
          <Chart options={chartOptions} series={series} type="donut" />
        </div>
        {/* Custom Legend */}
        <div className="flex flex-col justify-between items-start mt-[-20px]">
          <h3 className="mb-[20px] font-poppins text-[20px] font-semibold leading-[30.88px] text-center text-[#253C82]">
            Loan Status
          </h3>
          {labels.map((label, index) => (
            <div
              key={label}
              className="flex justify-start items-center gap-2 mb-[5px]"
            >
              <div
                className="w-4 h-4 rounded-[2px]"
                style={{
                  backgroundColor: colors[index], // Set color for each label's square
                }}
              ></div>
              <span className="text-black font-noraml text-[9px]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanStatusChart;
