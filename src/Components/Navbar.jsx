import React from "react";
import { Link } from "react-router-dom";
import logo from "/avatar.png"; 

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg mt-0 fixed-top"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        borderBottom: "1px solid rgb(49, 51, 50)",
        // borderBottomLeftRadius: "15px",
        // borderBottomRightRadius: "15px",
      }}
    >
      <div className="container" style={{ alignContent: "center" }}>
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="rounded-circle"
          />
          <h4 className="mb-0 fw-bolder" style={{ color: "rgb(30, 211, 6)" }}>
            Port<span className="text-light">folio</span>
          </h4>
        </Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{backgroundColor:'rgb(37, 248, 9)'}}
        >
          <span className="navbar-toggler-icon  "></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-center" style={{ columnGap: "60px" }}>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-light" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-light" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-light" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-light" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-light" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-light" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

