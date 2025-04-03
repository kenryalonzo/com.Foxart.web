import {logoApp} from "../assets/index"

import React from 'react'
import { Container } from "./Container"

const Header = () => {
  return (
    <div className='border-b border-x-stroke-1'>
      <Container>
        <img src={logoApp} width={104} height={32}  alt="App logo" />
        <button>login</button>
      </Container>
    </div>
  )
}

export default Header
