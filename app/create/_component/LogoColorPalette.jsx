import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/data/Lookup'
import Colors from '@/app/data/Colors'

const LogoColorPalette = ({onHandleInputChange}) => {
  const [selectedColor, setSelectedColor] = useState()

  return (
    <div className='my-10'>
      <HeadingDesc
      title={Lookup.LogoColorPaletteTitle}
      description={Lookup.LogoColorPaletteDesc} />

    <div className='grid grid-col-2 md:grid-cols-3 gap-5 mt-5'>
      {Colors.map((palette,index)=>( 
        <div className={`flex p-1 cursor-pointer ${selectedColor==palette.name && 'border-2 rounded-lg border-red-500'}`} key={index}>
          {palette?.colors.map((color, index)=>(
            <div className='h-24 w-full'
            key={index}
            onClick={()=>{setSelectedColor(palette.name);
              onHandleInputChange(palette.name)
            }}
            style={{
              backgroundColor:color
            }}></div>
          ))}
        </div>
      ))}
    </div>
    </div>

    
  )
}

export default LogoColorPalette