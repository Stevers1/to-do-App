import React from "react";

export default function Input(props) {


  return (
    <input
      onChange={props.onChange}
      name="desc"
      placeholder="Add New"
      className="todo-input"
      value={props.value}
    />
  );
}
