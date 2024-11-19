import { IMAGE_PATH } from "@/constants/constants";
import React from "react";

// Define the interface for props
interface UserCardProps {
  data: any;
}

const OffersCard: React.FC<UserCardProps> = ({ data }) => {
  return (
    <>
      {data?.map((item: any, index: any) => {
        const { img, roi, earnings, journeyStatus } = item;

        // Check if the status "not proceed" or "pending"
        const isPending =
          journeyStatus?.toLowerCase()?.includes("proceed") ||
          journeyStatus?.toLowerCase()?.includes("pending");
        return (
          <div
            className="flex justify-between items-center px-2 py-[6px] rounded-[14px] overflow-hidden shadow-custom mt-1 mb-3"
            key={index}
          >
            {/* Image */}
            <div className="text-black h-[65px] w-[65px] rounded-full flex items-center justify-center">
              <img src={`${IMAGE_PATH}/${img}`} className="h-full w-full" />
            </div>
            {/* Info Section */}
            <div className="flex flex-col text-black text-sm text-center gap-1">
              <span className="text-xl font-semibold text-start">mPocket</span>
              <div className="flex flex-row justify-center items-center gap-2">
                <span className="text-xs text-black">
                  ROI: <strong>{roi}</strong>
                </span>
                <span className="text-xs text-black">
                  Earnings: <strong>{earnings}</strong>
                </span>
              </div>
            </div>
            {/* Status Section */}
            <div
              className={`max-w-[9px] min-w-[80px] h-[30px] flex justify-center items-center text-black text-[9px] font-normal px-3 py-[2px] leading-[1.1] text-center ${
                isPending
                  ? "bg-[linear-gradient(90deg,_#FFC87A_0%,_#FFFFFF_100%)] border-[#F9A61A]"
                  : "bg-[linear-gradient(90deg,_#47B6F2_0%,_#FFFFFF_100%)] border-[#47B6F2]"
              } rounded-3xl text-[14px] border`}
            >
              {journeyStatus}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default OffersCard;
