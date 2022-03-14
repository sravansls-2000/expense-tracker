import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../../../redux/slices/users/usersSlices";

const PrivateNavbar = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state?.users?.userAuth);

  return (
    <>
      <nav class="navbar navbar-expand-sm navbar navbar-dark">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            <i class="bi bi-currency-exchange fs-1 text-warning "></i>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              { userLogin?.isAdmin ?
                <Link to="/expenses" className="btn  btn-outline-warning me-2">
                  Expenses List
                </Link>:null}
              </li>

              <li class="nav-item">
              { userLogin?.isAdmin ?
                <Link to="/incomes" className="btn  btn-outline-warning me-2">
                  Income List
                </Link>:null}
              </li>

              <li class="nav-item mb-2">
                { userLogin?.isAdmin ?
                <Link to="/dashboard" className="btn  btn-outline-warning me-2">
                  Dashboard
                </Link>:null}
              </li>
              <li class="nav-item">
              { userLogin?.isAdmin ?null:
                <Link to="/profile" className="btn  btn-outline-warning me-2" >
                  profile 
               </Link>}
              </li>
            </ul>
            <form class="d-flex">
           
              { userLogin?.isAdmin ?null:
              <Link to="/add-income" className="btn  btn-outline-warning me-2">
                Add transaction
              </Link>}
              <button
                onClick={() => dispatch(logout())}
                className="btn  btn-outline-warning me-2"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PrivateNavbar;