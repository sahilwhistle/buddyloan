import { IMAGE_PATH } from "@/constants/constants";
import React from "react";

interface FeaturesBannerProps {
  id: number;
  message: string;
  img: string;
}

const FeaturesCard: React.FC<FeaturesBannerProps> = ({ id, message, img }) => {
  return (
    <div
      className={`mt-[15px] mb-[15px] min-h-[45px] px-4 py-2 gap-4 text-center w-full flex items-center justify-between rounded-[8px] bg-white text-black shadow-[0px_0px_4px_0px_#00000040]`}
      key={id}
    >
      <div className="min-w-[50px] flex justify-center items-center">
        <img src={`${IMAGE_PATH}/${img}`} alt="Left Icon" />
      </div>
      <span className="text-[12px] text-start font-start">{message}</span>
      <img
        src={`${IMAGE_PATH}/more.png`}
        alt="More Icon"
        className="h-[20px] w-[20px]"
      />
    </div>
  );
};

export default FeaturesCard;
