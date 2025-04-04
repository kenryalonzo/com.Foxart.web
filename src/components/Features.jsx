import { features } from "../constants"
import { Container } from "./Container"

const Features = () => {
  return (
    <Container>
        <div className="max-w-4xl mx-auto py-5 lg:py-10">
            <div className="space-y-4 mb-8 text-center lg:text-start">
                <h2 className="h2">Features</h2>
                <p className="body-1 text-n-5">
                    Our landing page template is designed to be fully responsive and adapts seamlessly to any device, ensuring a great user experience.
                </p>
            </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-10">
            {features.map((features) => (
                <div key={features.id} className="border border-stroke-1 hover:bg-n-8 rounded-xl lg:rounded-2xl p-8 space-y-8 cursor-pointer animate">
                    <img 
                        src={features.image} 
                        alt={features.alt} 
                        width={48}
                        height={48}
                    />
                    <div className="space-y-4">
                        <h3 className="h4">{features.title}</h3>
                        <p className="body-2 text-n-3">
                            {features.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </Container>
  )
}

export default Features
