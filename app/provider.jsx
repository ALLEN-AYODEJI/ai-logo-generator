"use client"
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { UserDetailContext } from './_context/UserDetailContext'

const Provider = ({children}) => {
  const {user} = useUser();
  const [userDetail, setUserDetail] = useState( )
  // Save user data 
  useEffect(()=>{
    user && CheckUserAuth()
  }, [user])
  const CheckUserAuth= async()=>{
    // Save User to Database
     const result = await axios.post('/api/users', {
        userName: user?.fullName,
        userEmail: user?.primaryEmailAddress?.emailAddress
     });
     console.log(result.data)
      setUserDetail(result.data)
  }

  return (
    <div>
      <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
      <Header />
      <div className='px-10 lg:px-30 xl:px-45 2xl:px-52'>
        {children}
      </div>
      </UserDetailContext.Provider>
      
      
    </div>
  )
}

export default Provider