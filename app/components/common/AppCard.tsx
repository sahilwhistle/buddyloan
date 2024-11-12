"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface AppCardProps {
  companyIcons: string;
  company: string;
  updateDate: string;
  loanTenure?: string;
  interestRate?: string;
  loanAmount?: string;
  applicationDate?: string
}
const AppCard: React.FC<AppCardProps> = ({
  companyIcons,
  company,
  updateDate,
  loanAmount,
  interestRate,
  loanTenure,
  applicationDate
}) => {
  return (
    <div className='rounded-md shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]'>
      {/* card header */}
      <div className='bg-gradient-to-r from-[#FFC87A] to-[#FFFFFF] flex justify-between p-2 items-center'>
        <div>
          <Image
            width={80}
            height={80}
            alt='Company Icons'
            src={companyIcons}
            className='rounded-full sm:w-[50px] sm:h-[50px] w-[37px] h-[37px]'
          />
        </div>
        <div className='text-[#070707] font-medium text-md'>
          {company}
        </div>
        <div>
          <span className='text-[#070707] sm:text-[13px] text-[10px] flex font-normal'>Updated On: {updateDate}
            <span className='ml-1 cursor-pointer'>
              <Image
                width={10}
                height={10}
                src={'https://via.placeholder.com/20'}
                className='w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]'
                alt='Refresh Icon'
              />
            </span>
          </span>
        </div>
      </div>
      {/*card content*/}
      <div className='flex justify-between p-2'>
        <div className='flex flex-col'>
          <>
            {loanAmount ? <>
              <div className='text-[#000000] font-semibold text-[12px] sm:text-[14px]'>
                Loan Amount:
              </div>
              <div className='font-normal text-[#000000] text-[12px] sm:text-[14px]'>
                {loanAmount}
              </div>
            </> : ''
            }
          </>
          <>
            {
              applicationDate ? <>
                <div className='text-[#000000] font-semibold text-[12px] sm:text-[14px]'>
                  Application Date:
                </div>
                <div className='font-normal text-[#000000] text-[12px] sm:text-[14px]'>
                  {applicationDate}
                </div></> : ''
            }
          </>
        </div>
        <div className='flex flex-col'>
          <>{
            loanTenure ? <>
              <div className='text-[#000000] font-semibold text-[12px] sm:text-[14px]'>
                Loan Tenure:
              </div>
              <div className='font-normal text-[#000000] text-[12px] sm:text-[14px]'>
                {loanTenure}
              </div>
            </> : ''
          }
          </>
          <>
            {
              interestRate ?
                <>
                  <div className='text-[#000000] font-semibold text-[12px] sm:text-[14px]'>
                    Rate Of Interest:
                  </div>
                  <div className='font-normal text-[#000000] text-[12px] sm:text-[14px]'>
                    {interestRate}
                  </div>
                </>
                : ''
            }
          </>
        </div>
      </div>
      {/* card bottom */}
      <div className='flex justify-between p-2 items-center'>
        <Link
          href={'/refer'}
          className='text-[#00A6FF] font-medium text-[9px] sm:text-[12px]'
        >
          Refer Document
        </Link>
        <button className="flex items-center bg-[linear-gradient(90deg,_#FFC87A_0%,_#FFFFFF_100%)] text-dark px-4 py-2 rounded-full focus:outline-none text-[8px] sm:text-[12px] border border-[#F9A61A]">
          Accept Journey Not Started
          <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

      </div>
    </div>
  )
}

export default AppCard
