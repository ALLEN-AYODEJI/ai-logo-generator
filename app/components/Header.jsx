import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <div className='px-10 lg:px-30  xl:px-45 2xl:px-52 py-4 flex justify-between items-center border-b border-gray-200 bg-yellow-50'>
      <Image src={assets.logo_icon} alt="Logo"/>
      <Button>Get Started</Button>
    </div>
  )
}

export default Header