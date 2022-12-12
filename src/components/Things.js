import React from "react"


export default function Things(props) {

  return(
    <div style={{display : `${props.display}`}} className="todo-container" >
      <input 
        type="checkbox" 
        name ={props.name} 
        checked={props.checked}
        onChange={props.onChange}
        id={props.id}
        
        
      />
    <p>{props.item.desc}</p>
    </div>
  )
}