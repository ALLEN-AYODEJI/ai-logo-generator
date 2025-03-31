import React from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/data/Lookup'

const LogoDesc = ({onHandleInputChange, formData}) => {
  return (
    <div className='my-10'>
      <HeadingDesc
      title={Lookup.LogoDescTitle}
      description={Lookup.LogoDescDesc}/>

      <input type='text' placeholder={Lookup.LogoDescPlaceholder}
             className='p-6 border rounded-lg mt-5 w-full'
              defaultValue={formData?.desc}
             onChange={(e) => onHandleInputChange(e.target.value)}/>
    </div> 
  )
}

export default LogoDesc