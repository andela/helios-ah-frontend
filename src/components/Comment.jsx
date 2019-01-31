import React from 'react';

const Comment = () => (
  <div id="comment" className="media border-bottom">
    <img
      src="https://placeimg.com/640/480/animals"
      alt="user"
      className="mr-2 mt-2 rounded-circle"
    />
    <div className="media-body">
      <div id="username-history-container">
        <span id="username">username</span>
        <span id="comment-date">February 19, 2016</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ea repellendus suscipit saepe incidunt natus deserunt exer
      </p>
    </div>
  </div>
);

export default Comment;
