import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
// style
import './Opinion.css'
const Opinion = () => {
    return (
      <Fragment>
        <div className="Opinion" id="Opinion">
          <div className="container">
            <div className="row">
              <div data-aos="zoom-in">
                <h1>share us your opinion </h1>
                <p> your opinion encourage us to imporve our company ... </p>

                <button>
                  <Link
                    to="/CommnetsRefrence"
                    style={{
                      color: "rgb(218, 214, 214)",
                      textDecoration: "none",
                    }}
                  >
                    write here
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Opinion
