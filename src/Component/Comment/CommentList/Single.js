import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Comment.css";
import RatingValue from "../RatingValue";
const Single=(props)=> {
  const todo = props.todo;
  const completeTask = props.completeTask;

  return (
    <div className="comment-result">
      <div className="container">
        <div className="row">
          <div>
            <div className="comment-style">
              {" "}
              <h6 style={{ fontSize: "16px", fontWeight: "normal" }}>
                {todo.text}
              </h6>
              <RatingValue />
            </div>

            {/* to delete comment */}
            <div className="btn">
              <button
                className="trash-button"
                onClick={completeTask}
                // title="delete your comment"
                className="tags"
                gloss="delete comment"
              >
                <FontAwesomeIcon icon={faTrash} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
