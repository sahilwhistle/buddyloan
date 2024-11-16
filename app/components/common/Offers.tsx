import Image from "next/image";
import React from "react";

interface OfferDetailProps {
  label: string;
  value: string | number;
}

const OfferDetail: React.FC<OfferDetailProps> = ({ label, value }) => {
  return (
    <div className="flex items-baseline text-black">
      <span className="font-medium text-[12px]">{label}</span>
      <span className="font-medium text-[12px]">:</span>
      <span className="text-[12px] font-bold ps-1">{value}</span>
    </div>
  );
};

interface OffersProps {
  data: any;
}

const Offers: React.FC<OffersProps> = ({ data }) => {
  return (
    <>
      {data?.map((item: any, index: any) => {
        const {
          offersType,
          productImage,
          productName,
          offerStatus,
          offerROI,
          offerEarning,
        } = item;
        const offerDetails = [
          { label: "ROI", value: offerROI },
          { label: "Earning", value: offerEarning },
        ];
        return (
          <div
            key={index}
            className="rounded-[10px] overflow-hidden shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] my-4 p-2"
          >
            {/* Offer Type Badge */}
            <span className="px-4 py-[3px] text-black bg-[#EFFFE7] shadow-[0px_0px_0.83px_0px_rgba(0,0,0,0.25)] border border-[#1F7400]-500 text-[9px] rounded-xl my-1">
              {offersType}
            </span>

            <div className="flex justify-between">
              {/* Product Image and Name */}
              <div className="flex">
                <Image
                  src={productImage}
                  alt="Product Image"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] rounded-full ml-2"
                />
                <section className="flex min-w-[180px] ml-2">
                  <div className="flex flex-col items-center justify-center mx-auto">
                    <h6 className="text-black text-[22px] font-bold mb-1 text-center">
                      {productName}
                    </h6>
                    <span className="text-black bg-[linear-gradient(90deg,_#FFC87A_0%,_#FFFFFF_100%)] px-6 py-[0.10rem] rounded-3xl text-[14px] border border-[#F9A61A]">
                      {offerStatus}
                    </span>
                  </div>
                </section>
              </div>

              {/* Divider */}
              {/* <div className="border-r-2 border-gray-900 h-full ml-auto"></div> */}
              <div className="border-r-[0.2px] border-[#A8A7A7]"></div>

              {/* Offer Details (ROI & Earning) */}
              <div className="flex flex-col justify-end items-end mx-2 ps-3">
                {offerDetails.map((detail, index) => (
                  <OfferDetail
                    key={index}
                    label={detail.label}
                    value={detail.value}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Offers;
