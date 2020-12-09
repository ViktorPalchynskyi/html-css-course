const Instruction = ({title, step}) => (
  <section className="instructions">
   <h2>{title}</h2>
   {step.map((s, i) =>
   <p key={i}>{s}</p>
   )}
  </section>
)

export default Instruction;