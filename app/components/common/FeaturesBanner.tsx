import React from "react";

interface FeaturesBannerProps {
  message: string;
  img: string;
}

const FeaturesBanner: React.FC<FeaturesBannerProps> = ({ message, img }) => {
  return (
    <div className="mt-[80px] min-h-[60px] w-full flex items-center justify-between px-5 rounded-[8px] bg-white text-black shadow-[0px_0px_4px_0px_#00000040]">
      <img src={img} alt="Left Icon" className="h-[26px] w-[26px]" />
      <span className="text-sm">{message}</span>
      <img
        src="/assets/img/more.png"
        alt="More Icon"
        className="h-[20px] w-[20px]"
      />
    </div>
  );
};

export default FeaturesBanner;
