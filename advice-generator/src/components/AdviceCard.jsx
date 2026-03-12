import { useState } from "react";

function AdviceCard() {
  const [advice, setAdvice] = useState("It is easy to sit up and take notice.")
  const [id, setId] = useState(117)

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()

    setAdvice(data.slip.advice)
    setId(data.slip.id)
  }

  return (
    <div>
      <p>Advice #{id}</p>
      <h2>"{advice}"</h2>
      <button onClick={getAdvice}>
        Get Advice
      </button>
    </div>
  )
}

export default AdviceCard