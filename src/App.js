import React from 'react';
import Conditionals from "./Conditionals.js"
import Conditionals2 from "./Conditionals2.js"
import Conditionals3 from "./Conditionals3.js"
import AddCssClass from "./AddCssClass.js"
import TaskList from "./TaskList.js"
import "./App.scss"

function App(props) {
  return (
    <div className='App'>
      <TaskList />
     {/*  
      <Conditionals />
      <Conditionals2 /> 
      <Conditionals3 />
      <AddCssClass />
      <TaskList /> */}
     
    </div>
  );
}

export default App
