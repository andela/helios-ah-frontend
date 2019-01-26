import React from 'react';

const SectionsBar = () => (
  <div className="sections">
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" href="/">HOME</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/articles/tech">TECH</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/articles/education">EDUCATION</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/articles/politics">POLITICS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/articles/lifestyle">LIFESTYLE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/articles/science">SCIENCE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/aritcles/popular">POPULAR</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/articles/others">OTHERS</a>
      </li>
    </ul>
  </div>
);


export default SectionsBar;
