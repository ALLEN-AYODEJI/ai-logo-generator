import React from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/data/Lookup'

const PricingModel = () => {
  return (
    <div className='my-10'>
      <HeadingDesc
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
      />
    </div>
  )
}

export default PricingModel