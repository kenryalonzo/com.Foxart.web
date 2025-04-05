// 

import { bulletPoints } from "../constants";
import { Container } from "./Container";
import Headings from "./theme/Headings";

const BulletPoints = () => {
  return (
    <section className="relative py-12">
      <Headings title="Foxart" subtitle="How does it work ?" />
      <Container>
        <div className="mx-auto max-w-6xl space-y-16 md:space-y-24">
          {bulletPoints.map((bulletPoint, index) => (
            <div 
              key={bulletPoint.id}
              className={`
                flex flex-col items-center gap-8
                md:flex-row md:items-center md:justify-between
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
            >
              {/* Conteneur image */}
              <div className="w-full md:w-1/2 lg:w-7/12">
                <img 
                  src={bulletPoint.image} 
                  alt={bulletPoint.alt}
                  width={bulletPoint.width}
                  height={bulletPoint.height}
                  className="mx-auto w-full max-w-md object-contain px-4 md:px-0"
                  loading="lazy"
                />
              </div>

              {/* Conteneur texte */}
              <div className="w-full space-y-4 text-center md:w-1/2 md:space-y-6 md:text-left lg:w-5/12">
                <h3 className="text-2xl font-bold md:text-3xl">{bulletPoint.title}</h3>
                <p className="text-lg text-gray-600">{bulletPoint.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BulletPoints;