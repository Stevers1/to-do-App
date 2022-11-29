export default function InteractiveBar(props) {
  return(
    <div className="interactive-container">
      <button onClick={props.onClick1}>+</button>
      <img src="#" alt="Lupa"/>
      <input placeholder="Test"/>
      <button>All</button>
      <button onClick={props.onClickActive}>Active</button>
      <button>Completed</button>
    </div>
  )
}