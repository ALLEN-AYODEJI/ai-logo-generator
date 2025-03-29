import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/data/Lookup'
import Image from 'next/image'
import LogoDesign from '@/app/data/LogoDesign'

const LogoDesigns = ({onHandleInputChange}) => {
  const [seletedOption, setSelectedOption] = useState()
  return (
    <div className='my-10'>
      <HeadingDesc
      title={Lookup.LogoDesignTitle}
      description={Lookup.LogoDesignDesc}/>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {LogoDesign.map((design, index)=>(
          <div key={index} 
        onClick={()=>{setSelectedOption(design.title)
          onHandleInputChange(design)
        }}
          
          className={`p-1 hover:border-2 border-gray-300 rounded-xl cursor-pointer ${seletedOption===design.title && 'border-2 rounded-xl border-red-500'}`}>
          
            <Image src={design.image} alt={design.title} width={300}
            height={
              200}
              className='w-full rounded-xl'
            />
          </div>
        )) }
      </div>
    </div>
  )
}

export default LogoDesigns