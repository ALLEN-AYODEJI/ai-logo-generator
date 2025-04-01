'use client'
import React, {  useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/data/Lookup'
import { useSearchParams } from 'next/navigation'

const LogoTitle = ({onHandleInputChange}) => {

  const searchParam = useSearchParams()
  const [title, setTitle] = useState(searchParam?.get('title')??"")
  return (
    <div className='my-10'>
      <HeadingDesc
       title={Lookup?.LogoTitle}
       description={Lookup.LogoTitleDesc} />

       <input type='text' placeholder={Lookup.InputTitlePlaceholder}
              className='p-6 border rounded-lg mt-5 w-full'
              defaultValue={title}
       onChange={(e) => onHandleInputChange(e.target.value)}/>
    </div>
  )
}

export default LogoTitle