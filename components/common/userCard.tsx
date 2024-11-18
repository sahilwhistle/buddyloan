import React from "react";

// Define the interface for props
interface UserCardProps {
  data: any;
}

const UserCard: React.FC<UserCardProps> = ({ data }) => {
  return (
    <>
      {data?.map((item: any, index: any) => {
        const { userName, phoneNumber, status, journeyStatus } = item;
        // Extract the first character of the user's name
        const firstChar = userName.charAt(0).toUpperCase();

        // Check if the journeyStatus contains "not started" or "pending"
        const isPendingOrNotStarted =
          journeyStatus.toLowerCase().includes("not started") ||
          journeyStatus.toLowerCase().includes("pending");
        return (
          <div
            className="flex justify-between items-center px-5 py-3 rounded-[14px] overflow-hidden shadow-custom my-3"
            key={index}
          >
            {/* Circle with the first letter of the user's name */}
            <div className="text-black text-[38px] bg-[#CDEEFF] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] font-bold h-[57px] w-[57px] border rounded-full flex items-center justify-center">
              {firstChar}
            </div>
            {/* User Info Section */}
            <div className="flex flex-col text-black text-sm text-center">
              <span className="text-sm font-semibold">
                **** {userName.slice(-1).toUpperCase()}
              </span>
              <span className="text-xs text-[#0048FF]">{phoneNumber}</span>
            </div>
            {/* Status Section */}
            <div
              className={`max-w-[120px] min-w-[120px] h-[30px] flex justify-center items-center text-black text-[9px] font-normal px-3 py-[2px] leading-[1.1] text-center ${
                isPendingOrNotStarted
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

export default UserCard;
