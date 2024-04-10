import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text  ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Database Management System</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item justify-content:space-between ml-4">
              <a className ="nav-link " href="#"><b>Home</b></a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#about"><b>About</b></a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard"><b>Dashboard</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/details"><b>Create</b></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer"><b>Contact Us</b></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
