/* eslint-disable @next/next/no-img-element */
'use client'

import * as React from 'react'

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

const Logo: React.FC = () => {
  const theme =
    typeof window !== 'undefined'
      ? localStorage.getItem('payload-theme')
      : 'light'

  return (
    <div className='logo'>
      {/* <img
        src={
          theme === 'dark'
            ? '/images/logo-pink-white.png'
            : '/images/logo-pink.png'
        }
        width={200}
        height={20}
        alt='ContentQL Log0'
      /> */}
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
