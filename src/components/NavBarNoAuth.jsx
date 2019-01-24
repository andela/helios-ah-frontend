import React from 'react';
import SectionsBar from './SectionsBar';
import Search from './Search';

const NavBarNoAuth = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-noauth">
      <a className="brand-name navbar-brand ml-4" href="/">{'Author\'s Haven'}</a>
      <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="false">
        <span className="navbar-toggler-icon" />
      </button>


      <div className="navbar-collapse collapse" id="navb">
        <Search />
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="mr-5 ml-5">
              <button className="btn login-btn mr-4" type="button">Login</button>
              <button id="signup-btn" className="login-btn btn" type="button">Signup</button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <SectionsBar />
  </div>
);


export default NavBarNoAuth;
