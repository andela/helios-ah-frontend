import React from 'react';
import SectionsBar from './SectionsBar';

const NavBarNoAuth = () => (
  <div>
    <nav className="navbar navbar-expand-lg">
      <a className="brand-name navbar-brand ml-4" href="/">{'Author\'s Haven'}</a>
      <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="false">
        <span className="navbar-toggler-icon" />
      </button>


      <div className="navbar-collapse collapse" id="navb">
        <form className="form-inline ml-auto">
          <input className="search-input hide" type="text" placeholder="Search" />
          <i className="fa fa-search mr-sm-5 mr-5" />
        </form>
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="mr-5 ml-5">
              <button className="btn login-btn mr-4" type="button">Login</button>
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
