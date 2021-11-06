import React from "react";
import "../Comment.css";
const Single=(props)=> {
  const todo = props.todo;
  const completeTask = props.completeTask;

  return (
    <li>
      {todo.text}
      {/* to delete comment */}
      <button onClick={completeTask}>X</button> 
    </li>
  );
}

export default Single;
