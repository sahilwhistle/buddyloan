import Image from 'next/image';
import React from 'react';

const ConfirmationCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-72 p-6 bg-white rounded-xl shadow-lg text-center relative">
        <Image
            src={"/confirm.png" } 
            alt="Logo"
            width={200}       
            height={200}     
        />

        {/* Title and Subtitle */}
        <h2 className="text-xl font-semibold text-[#00A6FF] mb-2">
          Loan Application Has Been Submitted
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          The Lender Link has been sent to the Customer's WhatsApp
        </p>

        {/* OK Button */}
        <button className="px-20 py-2 bg-[#00A6FF] text-white font-semibold rounded-full hover:bg-teal-600 transition duration-200">
          OK
        </button>
      </div>
    </div>
  );
};

export default ConfirmationCard;