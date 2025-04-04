import {logoApp} from "../assets/index"
import { Container } from "./Container"
import { ButtonContent } from "./ButtonContent"
import { ElipseBlueBlur } from "./theme/Header"

const Header = () => {
  return (
    <div className='border-b border-x-stroke-1'>
      <Container>
        <div className="flex items-center justify-between py-4 lg:py-6">
          <img src={logoApp} width={104} height={32}  alt="App logo" />
          <ButtonContent theme="primary" href="/#">
            login
          </ButtonContent>
        </div>
        <ElipseBlueBlur />
      </Container>
    </div>
  )
}   

export default Header