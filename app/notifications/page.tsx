"use client";
import React from "react";
import FeaturesCard from "@/components/common/FeaturesCard";

const Notification = () => {
  const notificationData = [
    { id: 1, img: "rupees.png", message: "Earn extra 1% on disbursal today" },
    {
      id: 2,
      img: "tata.png",
      message:
        "New Partner Tata Capital Added in lender list with record disbursal TAT of 10 mins.",
    },
    {
      id: 3,
      img: "doller.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-sm mx-auto shadow-custom p-4 pt-[60px] min-h-[calc(100vh)]">
        {/* Features Cards */}
        <div className="mt-[40px]">
          {notificationData?.map((item, index) => {
            return (
              <div key={item.id}>
                <FeaturesCard
                  id={item.id}
                  img={item.img}
                  message={item.message}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notification;
