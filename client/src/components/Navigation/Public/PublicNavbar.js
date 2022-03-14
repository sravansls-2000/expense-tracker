import React from "react";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar navbar-dark" style={{" background-Color": "#5e5d96"}}>
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            <i class="bi bi-currency-exchange fs-1 text-warning "> <i class="fa fa-fw fa-home"></i></i>
          </Link>
         
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
               
              
              </li>

           
            </ul>
            <form class="d-flex">
              <Link to="/login" className="btn btn-outline-warning me-2" > 
                Sign In
              </Link>
              <Link to="/register" className="btn btn-outline-warning me-2">
                Sign Up
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PublicNavbar;