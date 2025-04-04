import { uiInterface } from "../assets"
import { ButtonContent } from "./ButtonContent"
import { Container } from "./Container"

const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative z-10 pt-10 lg:py-16 space-y-16">
        <div className="text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7">
            <h1 className="hero">
                Build{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
                    Modern{" "}
                </span> 
                Saas for Startups
            </h1>
            <p className="body-1 text-n-5 text-lg">
                Build a modern SaaS for startups with our powerful and flexible
                template. Get started now and take your business to the next
                level!
            </p>
            <ButtonContent theme={"primary"} href={"/#pricing"}>
                Pricing and Plans
            </ButtonContent>
        </div>
        <img src={uiInterface} alt="Ui Interface illustration" />
      </Container>
    </div>
  )
}

export default Hero
