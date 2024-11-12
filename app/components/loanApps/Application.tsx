import React from 'react'
import AppCard from '../common/AppCard'
import {applicationData,offersData} from '@/app/mock/application'
import Offers from '../common/Offers'

const Application = () => {
  return (
    <div className='bg-[#F6FCFF] max-w-sm mx-auto p-2'>
      <div className='flex w-full justify-center my-3'>
        <h5 className='font-bold text-[#253C82]'>
            Active Application
        </h5>
      </div>
      {
        applicationData?.length ? applicationData?.map((item)=>{
            return(
                <React.Fragment key={item.id}>
                     <AppCard
                        company={item?.company}
                        companyIcons={item?.icons}
                        updateDate={item?.updateDate}
                        applicationDate={item?.applicationDate}
                        interestRate={item?.rateOfInterest}
                        loanAmount={item?.loanAmount}
                        loanTenure={item?.loanTenure}
                     />
                </React.Fragment>
            )
        }): ''  
      }
      {/*  */}
      <div className='my-3 flex justify-center'>
        <h5 className='font-bold text-[#253C82]'>
            Other Available Offers
        </h5>
      </div>
      {/*  */}
      {
        offersData?.length ? offersData?.map((item)=>{
            return(
                <React.Fragment key={item?.id}>
                    <Offers
                        offerEarning={item?.offerEarning}
                        offerROI={item?.offerROI}
                        offerStatus={item?.offerStatus}
                        offersType={item?.offersType}
                        productImage={item?.productImage}
                        productName={item?.productName}
                    />
                </React.Fragment>
            )
        }) :''
      }
    </div>
  )
}

export default Application
