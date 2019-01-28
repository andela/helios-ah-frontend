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
        <Search />
        <ul className="navbar-nav">
          <li className="mt-2 nav-item">
            <div className="mr-5 ml-5 row">
              <LinkButton
                value="Login"
                className="btn home-login-btn mr-4"
                columnAttribute="col-xs-12"
                to="/login"
              />
              <LinkButton
                value="Signup"
                id="home-signup-btn"
                className="home-login-btn btn"
                columnAttribute="col-xs-12"
                to="/signup"
              />
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <SectionsBar />
  </div>
);


export default NavBarNoAuth;
