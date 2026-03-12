import { useState, useEffect } from "react";
import "./AdviceCard.css";
import diceIcon from "../assets/icon-dice.svg";

function AdviceCard() {
  const [advice, setAdvice] = useState("It is easy to sit up and take notice.")
  const [id, setId] = useState(117)

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()

    setAdvice(data.slip.advice)
    setId(data.slip.id)
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className="card">
      <p className="advice-id">ADVICE #{id}</p>

      <h2 className="advice-text">
        "{advice}"
      </h2>

      <div className="divider"></div>

      <button className="advice-button" onClick={getAdvice}>
        <img src={diceIcon} alt="dice icon" />
      </button>
    </div>
  )
}

export default AdviceCard