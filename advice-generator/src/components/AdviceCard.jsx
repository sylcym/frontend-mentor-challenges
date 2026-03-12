import { useState } from "react";

function AdviceCard() {
  const [advice, setAdvice] = useState("It is easy to sit up and take notice.")
  const [id, setId] = useState(117)

  return (
    <div>
      <p>Advice #{id}</p>
      <h2>"{advice}"</h2>
      <button>Get Advice</button>
    </div>
  )
}

export default AdviceCard