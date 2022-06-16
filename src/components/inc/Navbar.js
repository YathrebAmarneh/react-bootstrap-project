import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-dark bg-dark shadow">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  Target Furniture
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

// <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <a href="#x" data-toggle="collapse" className="navbar-toggler">
//     <span className="navbar-toggler-icon"></span>
//   </a>

//   <div id="x" className="collapse navbar-collapse">
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link" href="/">
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/about">
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/contact">
//           Contact
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>
export default Navbar;
