
import { useState } from "react"
import "./Crew.css"

import douglasHurley from "../../assets/crew/image-douglas-hurley.png"
import markShuttleworth from "../../assets/crew/image-mark-shuttleworth.png"
import victorGlover from "../../assets/crew/image-victor-glover.png"
import anoushehAnsari from "../../assets/crew/image-anousheh-ansari.png"

const crewMembers = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: douglasHurley,
    imageAlt: "Douglas Hurley, commander",
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space.",
    image: markShuttleworth,
    imageAlt: "Mark Shuttleworth, mission specialist",
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station, Victor Glover is a lieutenant commander in the U.S. Navy where he pilots an F/A-18.",
    image: victorGlover,
    imageAlt: "Victor Glover, pilot",
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: anoushehAnsari,
    imageAlt: "Anousheh Ansari, flight engineer",
  },
]

function Crew() {
  const [activeMember, setActiveMember] = useState(0)

  const member = crewMembers[activeMember]

  return (
    <main className="crew">
      <h1 className="crew-heading">
        <span className="crew-number">02</span>
        Meet your crew
      </h1>

      <section className="crew-content" aria-label="Crew members">
        <div className="crew-image-container">
          <img
            className="crew-image"
            src={member.image}
            alt={member.imageAlt}
          />
        </div>

        <div className="crew-indicators" aria-label="Choose a crew member">
          {crewMembers.map((crewMember, index) => (
            <button
              className={`crew-indicator ${activeMember === index ? "crew-indicator-active" : ""
                }`}
              key={crewMember.name}
              type="button"
              aria-label={`Show ${crewMember.name}`}
              aria-pressed={activeMember === index}
              onClick={() => setActiveMember(index)}
            />
          ))}
        </div>

        <div className="crew-details" aria-live="polite">
          <p className="crew-role">{member.role}</p>
          <h2 className="crew-name">{member.name}</h2>
          <p className="crew-description">{member.description}</p>
        </div>
      </section>
    </main>
  )
}

export default Crew
