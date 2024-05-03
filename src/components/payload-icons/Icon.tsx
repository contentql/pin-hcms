/* eslint-disable @next/next/no-img-element */
import * as React from 'react'

const Icon: React.FC = () => {
  return (
    <div className='logo'>
      <img
        src='/images/favicon.ico'
        width={28}
        height={28}
        alt='ContentQL Favicon'
      />
    </div>
  )
}

export default Icon
