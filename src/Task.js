import React,{useState} from "react"
import "./Task.css"

//Question: use conditionals with props
function Task ({name, isCompleted}) {
  if (isCompleted) {
    return (
      <del className="complete">
        {""}
        <li>{name} ✓</li>
      </del>)
  }
    return <li>{name} </li>
}
export default Task;


