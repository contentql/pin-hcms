/* eslint-disable @next/next/no-img-element */
import * as React from 'react'

const Logo: React.FC = () => {
  const theme = localStorage.getItem('payload-theme')

  return (
    <div className='logo'>
      <img
        src={
          theme === 'dark'
            ? '/images/logo-pink-white.png'
            : '/images/logo-pink.png'
        }
        width={200}
        height={20}
        alt='ContentQL Log0'
      />
    </div>
  )
}

export default Logo
