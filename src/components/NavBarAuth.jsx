import React from 'react';
import SectionsBar from './SectionsBar';
import Search from './Search';

const NavBarAuth = () => (
  <div>
    <nav className="navbar navbar-expand-lg">
      <a className="brand-name navbar-brand ml-4" href="/">{'Author\'s Haven'}</a>
      <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="false">
        <span className="navbar-toggler-icon" />
      </button>


      <div className="navbar-collapse collapse" id="navb">
        <Search />
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="btn add-article-btn mr-5 ml-5 mt-2" type="button">Add new Article</button>
          </li>
          <li className="nav-item">
            <i className="fas fa-bell major-color mr-5 ml-5" data-toggle="modal" data-target="#exampleModalLong" />
          </li>
          <li className="nav-item dropdown">
            <img
              alt="user-avatar"
              id="img"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              className="mr-4 dropdown-toggle"
              data-toggle="dropdown"
            />
            <div className="dropdown-menu dropdown-menu-left text-left mr-4" aria-labelledby="img">
              <span className="caret" />
              <a className="dropdown-item" href="/">Bookmarks</a>
              <a className="dropdown-item" href="/">Read Stats</a>
              <a className="dropdown-item" href="/">Favorites</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="/">Profile</a>
              <a className="dropdown-item" href="/">
                Sign out&nbsp;&nbsp;&nbsp;
                <i className="fas fa-sign-out-alt" />

              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <SectionsBar />
    <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Notifications</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
        ... No Notifications yet
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default NavBarAuth;
