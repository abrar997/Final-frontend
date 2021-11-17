import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// props means trans all props from main component which write in <Create .........../> 
import "../Comment.css";

function Create(props) {
  return (
    <div className="add-comment ">
      <div className="container">
        <div className="row">
          <textarea 
            value={props.value}
            onChange={props.onChange}
            type="text"
            placeholder="add your comment"
          />

          <button onClick={props.addTask}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
          {/* <RatingValue /> */}
      </div></div>
    </div>
  );
}

export default Create;
