import { useState, useEffect } from "react";
import "./AdviceCard.css";
import diceIcon from "../assets/icon-dice.svg";
import dividerDesktop from "../assets/pattern-divider-desktop.svg";
import dividerMobile from "../assets/pattern-divider-mobile.svg";

function AdviceCard() {
  const [advice, setAdvice] = useState("It is easy to sit up and take notice.")
  const [id, setId] = useState(117)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // async function getAdvice() {

  //   setLoading(true)
  //   setError(null)

  //   try {

  //     const response = await fetch(
  //       "https://api.adviceslip.com/advice",
  //       { cache: "no-cache" }
  //     )

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch advice")
  //     }

  //     const data = await response.json()

  //     setAdvice(data.slip.advice)
  //     setId(data.slip.id)

  //   } catch (err) {

  //     setError("Something went wrong. Try again.")

  //   } finally {

  //     setLoading(false)

  //   }
  // }
  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache"
    })

    if (!response.ok) {
      throw new Error("Failed to fetch advice")
    }

    const data = await response.json()
    return data.slip
  }

  async function getAdvice() {
    setLoading(true)
    setError(null)

    try {
      const slip = await fetchAdvice()

      setAdvice(slip.advice)
      setId(slip.id)

    } catch (err) {
      setError("Something went wrong. Try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className="card">
      <p className="advice-id">ADVICE #{id}</p>

      <h2 className="advice-text fade">

        {loading && "Loading..."}

        {error && error}

        {!loading && !error && `"${advice}"`}

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
    </div>
  )
}

export default AdviceCard