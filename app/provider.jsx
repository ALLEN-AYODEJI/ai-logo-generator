import React from 'react'
import Header from './components/Header'

const Provider = ({children}) => {
  return (
    <div>
      <Header />
      <div className='px-10 lg:px-30 xl:px-45 2xl:px-52'>
        {children}
      </div>
      
    </div>
  )
}

export default Provider