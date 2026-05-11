import steps from '../../data/steps'

function Sidebar() {
  return (
    <div>
      {steps.map((step) => (
        <div key={step.id}>
          <p>STEP {step.id}</p>
          <h3>{step.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Sidebar