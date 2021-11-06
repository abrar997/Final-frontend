import React from "react";
// props means trans all props from main component which write in <Create .........../> 
import "../Comment.css";
function Create(props) {
  return (
    <div>
      <input value={props.value} onChange={props.onChange} />
      <button onClick={props.addTask}>Add Task</button>
    </div>
  );
}

export default Create;
