import React,{Fragment} from 'react'
import './DropNav.css'
const DropNav = () => {
    return (
      <Fragment>
        <div className="dropnav">
          <nav className="navbar navbar-expand-lg mb-4 drop">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="container ml-4">
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        about
                      </a>
                    </li>
                   

                    <li className="nav-item">
                      <a className="nav-link" href="#stuents">
                        our students
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#Opinion">
                        your opinion
                      </a>
                    </li>
                     <li className="nav-item">
                      <a className="nav-link" href="#instr">
                        Instructor
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#footer">
                        contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Fragment>
    );
}

export default DropNav
