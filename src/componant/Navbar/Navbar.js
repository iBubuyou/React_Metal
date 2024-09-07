import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function MyNavbar() {
    
    return (
  
    <div className="navbar-container d-flex flex-column align-items-center">
      <div className="text-center">
        <h1>Metal Touch Sensor Module</h1>
      </div>
      <div className="nav-links ">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/db">
          <h3>Database</h3>
        </Link>
      </div>
    </div>
    
  );
}

export default MyNavbar;
