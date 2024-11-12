import Image from 'next/image';
import React from 'react'

interface OffersProps {
  offersType: string;
  productImage: string;
  productName: string;
  offerStatus: string;
  offerROI: string;
  offerEarning: string;
}

const Offers: React.FC<OffersProps> = ({ offersType, productImage,
  productName,
  offerStatus,
  offerROI,
  offerEarning,
}) => {
  return (
    <div className='shadow-md p-2 rounded-md border-[#D9D9D9] border-2'>
      <span className='px-4 py-1 shadow-[0px_0px_0.83px_0px_rgba(0,0,0,0.25)] border-[#EFFFE7] text-[9px] rounded-xl my-1'>
        {offersType}
      </span>
      <div className='flex justify-between'>
        <div>
          <Image
            src={productImage}
            alt='Product Image'
            width={50}
            height={50}
            className='w-[50] h-[50] rounded-full ml-2'
          />
        </div>
        <section className='flex min-w-[180px]'>
          <div className='flex flex-col items-center justify-center mx-auto'>
            <h6 className='text-[#070707] text-[12px] font-bold mb-1 text-center'>{productName}</h6>
            <span className='bg-[linear-gradient(90deg,_#FFC87A_0%,_#FFFFFF_100%)] px-6 py-[0.10rem] rounded-3xl text-[14px] border border-[#F9A61A]'>
              {offerStatus}
            </span>
          </div>
          <div className='border-r-2 border-gray-300 h-full ml-auto'></div>
        </section>
        <div className='flex items-center'>
          {/* <div className='border-l-2 border-gray-300 h-full mx-2'></div> Vertical line */}
          <div className='flex flex-col justify-start'>

            <div className='flex items-baseline'>
              <span className='font-medium text-[12px] mr-1'>ROI</span>
              <span className='font-medium text-[12px]'>:</span>
              <span className='text-[12px] font-bold'>{offerROI}</span>
            </div>
            <div className='flex items-baseline'>
              <span className='font-medium text-[12px] mr-1'>Earning</span>
              <span className='font-medium text-[12px]'>:</span>
              <span className='font-medium text-[12px] font:bold'>{offerEarning}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
