"use client"
import React, { useState } from 'react'
import LogoTitle from './_component/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_component/LogoDesc'
import LogoColorPalette from './_component/LogoColorPalette'
import LogoDesigns from './_component/LogoDesigns'
import LogoIdea from './_component/LogoIdea'
import PricingModel from './_component/PricingModel'

const CreateLogo = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})
  const onHandleInputChange = (field, value) => {
    setFormData(prev=>({
      ...prev,
      [field]: value
    }))

    console.log(formData)
  }

  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
      {step === 1 ? 
        <LogoTitle onHandleInputChange={(v)=>onHandleInputChange('title', v)} formData={formData} /> :
        step === 2 ?
        <LogoDesc onHandleInputChange={(v)=>onHandleInputChange('desc', v)} formData={formData}/> :
        step === 3 ?
        <LogoColorPalette onHandleInputChange={(v)=>onHandleInputChange('palette', v)} formData={formData}/> :
        step === 4 ?
        <LogoDesigns onHandleInputChange={(v)=>onHandleInputChange('design', v)} formData={formData}/> :
        step === 5 ?
        <LogoIdea 
        formData={formData}
        onHandleInputChange={(v)=>onHandleInputChange('idea', v)}/> :
        step === 6 ?
        <PricingModel 
        formData={formData}
        onHandleInputChange={(v)=>onHandleInputChange('pricing', v)}/>:
        null
      }

      <div className='flex items-center justify-between mt-10'>
        {step!=1&&<Button variant={"outline"} onClick={()=>setStep(step - 1)}> <ArrowLeft/>Previous</Button>}
        <Button onClick={()=>setStep(step + 1)}> <ArrowRight/>Continue</Button>
      </div>
    </div>
  )
}

export default CreateLogo