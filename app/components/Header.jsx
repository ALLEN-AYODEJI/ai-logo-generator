"use client"
import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'

const Header = () => {
  const {user}= useUser();
  return (
    <div className='px-10 lg:px-20  xl:px-32 2xl:px-40 py-4 flex justify-between items-center border-b border-gray-200 bg-yellow-50'>
      <Image src={assets.logo_icon} alt="Logo"/>
      <div className='flex gap-3 items-center'>
        {user ? <Button>Dashboard</Button> : <Button>Get Started</Button>
        } 
      <UserButton/>
      </div>
    </div>
  )
}

export default Header

// 1:33:46