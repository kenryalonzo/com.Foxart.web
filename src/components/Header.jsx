import {logoApp} from "../assets/index"

import React from 'react'

const Header = () => {
  return (
    <div className='border-b border-x-stroke-1'>
      <img src={logoApp} width={104} height={32}  alt="App logo" />
      <button>login</button>
    </div>
  )
}

export default Header
