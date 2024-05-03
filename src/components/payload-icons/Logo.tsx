'use client'

import Image from 'next/image'
import * as React from 'react'

const Logo: React.FC = () => {
  const test = React.useState()

  const theme = localStorage.getItem('payload-theme')

  return (
    <div className='logo'>
      <Image
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
