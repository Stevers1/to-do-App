export default function InteractiveBar(props) {
  return(
    <div className="interactive-container">
      <button onClick={props.onClick}>+</button>
      <img src="#" alt="Lupa"/>
      <input placeholder="Test"/>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  )
}