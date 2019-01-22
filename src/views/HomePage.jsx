import React from 'react';
import NavBarAuth from '../components/NavBarNoAuth';
import { Card } from '../components';

const bookmark = (event) => {
  event.target.classList.add('bookmark-clicked');
};
const like = (event) => {
  event.target.classList.add('like-clicked');
};
const rate = (event, value) => {
  let index = 0, item = 0;
  const element = event.target.parentNode.parentNode.children;
  while (index < 5) {
    element[index].firstChild.classList.remove('rated');
    index += 1;
  }
  item = 0;
  while (item < parseInt(value, 10)) {
    element[item].firstChild.classList.add('rated');
    item += 1;
  }
};

const HomePage = () => (
  <div>
    <NavBarAuth />
    <div className="row card-row">
      <Card
        id="1"
        bookmark={bookmark}
        like={like}
        rate={rate}
      />
      <Card
        id="2"
        bookmark={bookmark}
        like={like}
        rate={rate}
      />
      <Card
        id="3"
        bookmark={bookmark}
        like={like}
        rate={rate}
      />
    </div>
  </div>
);

export default HomePage;
