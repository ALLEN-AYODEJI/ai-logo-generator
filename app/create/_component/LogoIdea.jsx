import React, { useEffect, useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/data/Lookup'
import axios from 'axios'
import Prompt from '@/app/data/Prompt'
import { Loader2Icon } from 'lucide-react'

const LogoIdea = ({formData, onHandleInputChange}) => {
  const [ideas, setIdeas] = useState();
  const [loading, setLoading] = useState(false)
  const [seletedOption, setSelectedOption] = useState(formData?.idea)
  useEffect(() => {
    generateLogoDesignIdea();

  },[])

  const generateLogoDesignIdea = async () => {
    setLoading(true)
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT
    .replace('{logoType}', formData?.design.title)
    .replace('{logoTitle}', formData.title)
    .replace('{logoDesc}', formData.desc)
    .replace('{logoPrompt}', formData.design.prompt)

    const result=await axios.post('/api/ai-design-ideas',{
      prompt:PROMPT
    })

    console.log(result.data)
    setIdeas(result.data.ideas.map(item => item.idea) || [])
    setLoading(false)
  }

  return (
    <div className='my-10'>
      <HeadingDesc
      title={Lookup.LogoIdeaTitle}
      description={Lookup.LogoIdeaDesc}/>

      <div className='flex items-center justify-center'>
       {loading&&<Loader2Icon className='animate-spin my-10'/>}  
      </div>

      <div className='flex flex-wrap gap-2 mt-6'>
        {ideas&&ideas.map((item, index)=>(
          <h2 key={index}
          onClick={()=>{setSelectedOption(item)
            onHandleInputChange={item}
          }}
         
          className={`p-2 rounded-full border px-3 cursor-pointer hover:border-red-400
           ${seletedOption==item && 'bg-red-500 text-white'}`}>
            {item}
          </h2>
        ))}

        <h2
        onClick={()=>{setSelectedOption('Let AI Select the best Idea')
          onHandleInputChange=('Let AI Select the best Idea')
        }}
         className={`p-2 rounded-full border px-3 cursor-pointer hover:border-red-400
           ${seletedOption=='Let AI Select the best Idea' && 'bg-red-500 text-white'}`}>Let AI Select the best Idea</h2>
      </div>
    </div>
  )
}

export default LogoIdea