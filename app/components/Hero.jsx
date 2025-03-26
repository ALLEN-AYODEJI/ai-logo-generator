"use client"
import React, { useState } from 'react'
import Lookup from '../data/Lookup'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Hero = () => {
  const [LogoTitle, setLogoTitle] = useState();
  return (
    <div className='flex items-center mt-24 flex-col gap-5'>
      <h2 className='text-red-500 text-5xl text-center font-bold'>{Lookup.HeroHeading}</h2>
      <h2 className='text-5xl text-center font-medium'>{Lookup.HeroSubHeading}</h2>
      <p className='text-lg text-gray-500 text-center'>{Lookup.HeroDesc}</p>

      <div className='flex gap-6 w-full max-w-2xl mt-10'>
        <input type="text" placeholder={Lookup.InputTitlePlaceholder} 
        className=' w-full border border-gray-200 p-3 rounded-md shadow-md'
        onChange={(event)=>setLogoTitle(event?.target.value)}/>

        <Link href={'/create?title=' + LogoTitle}>
          <Button className="p-6 cursor-pointer hover:bg-gray-800" >Get Started</Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero