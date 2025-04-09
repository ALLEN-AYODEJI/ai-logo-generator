"use client"
import React, { useContext } from 'react'
import { UserDetailContext } from '../_context/UserDetailContext'

const GenerateLogo = () => {
  const [userDetail, setUserDetail] = useContext(UserDetailContext)
  const [formData, setFormData] = useState()

  useEffect(()=>{
    if (typeof window !== undefined && userDetail?.email) {
     const storage = localStorage.getItem('formData')
     if (storage) {
       setFormData(JSON.parse(storage))
       console.log(JSON.parse(storage))
     }
    }
  }, [userDetail])

  return (
    <div>GenerateLogo</div>
  )
}

export default GenerateLogo