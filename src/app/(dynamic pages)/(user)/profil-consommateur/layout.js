import React from 'react'
import MenuIcon from './MenuIcon'


const ProfilConsommateurLayout = ({children}) => {  

  return (
    <div>

      <MenuIcon/>
      <div className='container mx-auto max-w-5xl p-3'>
        {children}
      </div>
        
    </div>    
  )
}

export default ProfilConsommateurLayout