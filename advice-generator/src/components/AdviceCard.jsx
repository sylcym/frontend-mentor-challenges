import { useState, useEffect } from "react";
import "./AdviceCard.css";
import diceIcon from "../assets/icon-dice.svg";
import dividerDesktop from "../assets/pattern-divider-desktop.svg";
import dividerMobile from "../assets/pattern-divider-mobile.svg";

function AdviceCard() {
  const [advice, setAdvice] = useState("It is easy to sit up and take notice.")
  const [id, setId] = useState(117)
  const [loading, setLoading] = useState(false)

  async function getAdvice() {

    setLoading(true)

    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()

    setAdvice(data.slip.advice)
    setId(data.slip.id)

    setLoading(false)
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className="card">
      <p className="advice-id">ADVICE #{id}</p>

      <h2 className="advice-text">
        {loading ? "Loading..." : `"${advice}"`}
      </h2>

      <picture className="divider">
        <source media="(max-width: 600px)" srcSet={dividerMobile} />
        <img src={dividerDesktop} alt="divider" />
      </picture>
      <button
        className={`advice-button ${loading ? "loading" : ""}`}
        onClick={getAdvice}
        disabled={loading}
      >
        <img src={diceIcon} alt="dice icon" />
      </button>
      {/* <button
        className="advice-button"
        onClick={getAdvice}
        disabled={loading}
      >
        {loading ? "..." : <img src={diceIcon} alt="dice" />}
      </button> */}
    </div>
  )
}

export default AdviceCard