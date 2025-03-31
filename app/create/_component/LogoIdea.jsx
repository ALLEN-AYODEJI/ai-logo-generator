import React, { useEffect } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/data/Lookup'
import axios from 'axios'
import Prompt from '@/app/data/Prompt'

const LogoIdea = () => {

  useEffect(() => {
    generateLogoDesignIdea();

  },[])

  const generateLogoDesignIdea = () => {
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT
    .replace('{logotype}', FormData?.design?.title)
    .replace('{logoTitle}', FormData.title)
    .replace('{logoDesc}', FormData.desc)
    .replace('{logoPrompt}', FormData.design?.prompt)
    console.log(PROMPT)
    // const result=await axios.post('/api/ai-design-ideas',{
    //   prompt:
    // })
  }

  return (
    <div className='my-10'>
      <HeadingDesc
      title={Lookup.LogoIdeaTitle}
      description={Lookup.LogoIdeaDesc}/>
    </div>
  )
}

export default LogoIdea