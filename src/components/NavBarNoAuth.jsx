import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';
import SectionsBar from './SectionsBar';
import Search from './Search';

const NavBarNoAuth = () => (
  <div>
    <nav className="navbar navbar-expand-lg">
      <Link
        className="brand-name navbar-brand ml-4"
        to="/"
      >
        {'Author\'s Haven'}

      </Link>
      <button
        className="navbar-toggler navbar-toggler-right collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navb"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="navbar-collapse collapse" id="navb">
        <form className="form-inline ml-auto">
          <input
            className="search-input hide"
            type="text"
            placeholder="Search"
          />
          <i className="fa fa-search mr-sm-5 mr-5" />
        </form>
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="mr-5 ml-5">
              <LinkButton
                value="Login"
                className="btn login-btn mr-4"
                columnAttribute="col-sm-6 col-xs-12"
                to="/login"
              />
              <LinkButton
                value="Signup"
                className="btn signup-btn"
                columnAttribute="col-sm-6 col-xs-12"
                to="/login"
              />
              <button
                className="btn login-btn mr-4"
                type="button"
              >
                  Login

              </button>
              <button className="signup-btn btn" type="button">Signup</button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <SectionsBar />
  </div>
);


export default NavBarNoAuth;
