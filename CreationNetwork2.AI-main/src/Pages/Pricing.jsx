import React from 'react'
import AfterNavSection from '../Components/PricingComponents/AfterNavSection'
import Prices from '../Components/PricingComponents/Prices'
import FaqSection from '../Components/PricingComponents/FaqSection'


const Pricing = () => {
  return (
    <div className='bg-black text-white'>
    <AfterNavSection/>
    <Prices/>
    <FaqSection/>
    </div>
  )
}

export default Pricing