import { useState } from "react"
import "./Destination.css"

import moonImage from "../../assets/destination/image-moon.png"
import marsImage from "../../assets/destination/image-mars.png"
import europaImage from "../../assets/destination/image-europa.png"
import titanImage from "../../assets/destination/image-titan.png"

const destinations = [
  {
    name: "Moon",
    image: moonImage,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
  },
  {
    name: "Mars",
    image: marsImage,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travelTime: "9 months",
  },
  {
    name: "Europa",
    image: europaImage,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travelTime: "3 years",
  },
  {
    name: "Titan",
    image: titanImage,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travelTime: "7 years",
  },
]

function Destination() {
  const [activeDestination, setActiveDestination] = useState("Moon")

  const selectedDestination = destinations.find(
    (destination) => destination.name === activeDestination,
  )

  return (
    <main className="destination">
      <h1 className="destination-heading">
        <span className="destination-heading-number">01</span>
        Pick your destination
      </h1>

      <img
        className="destination-image"
        src={selectedDestination.image}
        alt={selectedDestination.name}
      />

      <nav className="destination-tabs" aria-label="Choose a destination">
        {destinations.map((destination) => (
          <button
            className={`destination-tab ${activeDestination === destination.name
                ? "destination-tab-active"
                : ""
              }`}
            key={destination.name}
            type="button"
            onClick={() => setActiveDestination(destination.name)}
            aria-pressed={activeDestination === destination.name}
          >
            {destination.name}
          </button>
        ))}
      </nav>

      <section className="destination-info">
        <h2 className="destination-name">{selectedDestination.name}</h2>

        <p className="destination-description">
          {selectedDestination.description}
        </p>

        <div className="destination-divider" />

        <div className="destination-stats">
          <div className="destination-stat">
            <h3 className="destination-stat-label">Avg. distance</h3>
            <p className="destination-stat-value">
              {selectedDestination.distance}
            </p>
          </div>

          <div className="destination-stat">
            <h3 className="destination-stat-label">Est. travel time</h3>
            <p className="destination-stat-value">
              {selectedDestination.travelTime}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Destination