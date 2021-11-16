import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Comment.css";
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
              <h5>{todo.text}</h5>
              <p>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#db2d41", fontSize: "12px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#db2d41", fontSize: "10px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#db2d41", fontSize: "10px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#db2d41", fontSize: "10px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#4785f1", fontSize: "10px" }}
                />
              </p>
            </div>
            {/* to delete comment */}
            <div className="btn">
              <button
                className="trash-button"
                onClick={completeTask}
                // title="delete your comment"
                className="tags"
                gloss="delete your comment"
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
