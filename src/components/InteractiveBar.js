export default function InteractiveBar(props) {
  return(
    <div className="interactive-container">
      <button onClick={props.onClick1}>+</button>
      <img src="#" alt="Lupa"/>
      <input placeholder="Search..." onChange={props.searchBar}/>
      <button onClick={props.onClickAll}>All</button>
      <button onClick={props.onClickActive}>Active</button>
      <button onClick={props.onClickCompleted}>Completed</button>
    </div>
  )
}