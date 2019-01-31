import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default (props) => (
  <div className="recent-article">
    <Link to={`/article/${props.id}`}>
      <h5>{props.title}</h5>
      <p>{props.body.substring(0,80)}...</p>
    </Link> 
  </div>
);
