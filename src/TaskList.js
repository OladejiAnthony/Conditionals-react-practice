import React,{useState} from "react"
import Task from "./Task"

function TaskList () {
  return (
    <div>
      <h1> List of Tasks </h1>
      <ul>
        <Task   
          name="Task One"
          isCompleted={true}
        />
        <Task   
          name="Task Two"
          isCompleted={false}
        />
        <Task   
          name="Task Three"
          isCompleted={true}
        />
      </ul>
    </div>
  )
}
export default TaskList;
