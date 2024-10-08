import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/Home"
                className="nav-link active"
                aria-current="page"
                href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Skills" className="nav-link" href="">
                My Expertise
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link" href="#">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Projects" className="nav-link" href="#">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" tabIndex="-1">
                Contact Me
              </a>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
