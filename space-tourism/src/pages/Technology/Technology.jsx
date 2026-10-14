
import { useState } from "react"
import "./Technology.css"

import launchVehicle from "../../assets/technology/image-launch-vehicle-landscape.jpg"
import spaceport from "../../assets/technology/image-spaceport-landscape.jpg"
import spaceCapsule from "../../assets/technology/image-space-capsule-landscape.jpg"

const technologies = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: launchVehicle,
    imageAlt: "A launch vehicle ready for launch",
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching or receiving spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    image: spaceport,
    imageAlt: "A spaceport launch facility",
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: spaceCapsule,
    imageAlt: "A space capsule floating in space",
  },
]

function Technology() {
  const [activeTechnology, setActiveTechnology] = useState(0)

  const technology = technologies[activeTechnology]

  return (
    <main className="technology">
      <h1 className="technology-heading">
        <span className="technology-number">03</span>
        Space launch 101
      </h1>

      <section
        className="technology-content"
        aria-label="Space launch technologies"
      >
        <div className="technology-image-container">
          <img
            className="technology-image"
            src={technology.image}
            alt={technology.imageAlt}
          />
        </div>

        <div className="technology-details">
          <div
            className="technology-controls"
            aria-label="Choose a technology"
          >
            {technologies.map((item, index) => (
              <button
                className={`technology-control ${activeTechnology === index
                    ? "technology-control-active"
                    : ""
                  }`}
                key={item.name}
                type="button"
                aria-label={`Show ${item.name}`}
                aria-pressed={activeTechnology === index}
                onClick={() => setActiveTechnology(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="technology-text" aria-live="polite">
            <p className="technology-eyebrow">The terminology...</p>
            <h2 className="technology-name">{technology.name}</h2>
            <p className="technology-description">
              {technology.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Technology
