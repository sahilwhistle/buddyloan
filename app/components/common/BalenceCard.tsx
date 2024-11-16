import React from "react";

interface BalanceCardProps {
  labelOne?: string;
  labelOneBalance?: number;
  labelTwo?: string;
  labelTwoBalance?: number;
  button?: string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  labelOne,
  labelOneBalance,
  labelTwo,
  labelTwoBalance,
  button,
}) => {
  return (
    <div className="mt-[80px] flex h-[120px] w-full items-center justify-between px-7 rounded-[20px] bg-[#00A6FF] shadow-[0px_0px_4px_0px_#00000040]">
      <div className="flex flex-col justify-center items-center text-center text-[16px] leading-[40px] text-white">
        <span>{labelOne}</span>
        <span className="text-[36px] font-extrabold">₹{labelOneBalance}</span>
      </div>

      {/* Vertical line */}
      {!button ? (
        <>
          <div className="h-24 border-l-2 border-white"></div>

          <div className="flex flex-col justify-center items-center text-center text-[16px] leading-[40px] text-white">
            <span>{labelTwo}</span>
            <span className="text-[36px] font-extrabold">
              ₹{labelTwoBalance}
            </span>
          </div>
        </>
      ) : (
        <button className="h-36px w-119px rounded-[6px] bg-white text-b-blue px-5 py-2 text-md font-bold">
          {button}
        </button>
      )}
    </div>
  );
};

export default BalanceCard;
