import React from 'react';
import { Link } from 'react-router-dom';

const BuzzSection = () => (
  <div className="container-fluid">
    <div className="row buzz-section">
      <div className="col-md-6">
        <div className="row" id="main-article">
          <div className="col-lg-5 main-article-text">
            <h5>Shutdown Ripples Across Nation Affecting Farmers and Parents</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem autem ullam ut
              officiis earum eaque cum libero, quae adipisci iure iste quisquam placeat architecto
              ex, eveniet velit corrupti aut cumque. quae adipisci iure iste quisquam placeat architecto
              ex, eveniet velit corrupti aut cumque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
              <Link to="/article/23-sdd-dfdf"> Read More</Link>
            </p>
            <div className="article-info">
              <span>Tony Nwosu</span>
              <span className="offset-3">6 mins read</span>
            </div>
          </div>
          <div className="col-lg-7 main-article-image">
            <img
              className="card-img-top main-article-img"
              id="main-article-img"
              src="https://images.unsplash.com/photo-1547894233-3b986939e29c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="card"
            />
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        <div className="row article-col">
          <div className="col-6">
            <Link to="/article/233-sddee-ed">
              <img
                className="article-img"
                src="https://images.unsplash.com/photo-1547894233-3b986939e29c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </Link>
          </div>
          <div className="col" style={{ textAlign: 'left' }}>
            <Link to="/article/233-sddee-ed" className="article-link">
              <h5>Dangers of some kind of Religion...</h5>
              <div><Link to="/profile" className="profile-link"><span>Diana Loren</span></Link></div>
              <div>10 mins read</div>
            </Link>

          </div>
        </div>
        <div className="row article-col middle-article-col">
          <div className="col-6">
            <Link to="/article/233-sddee-ed">
              <img
                className="article-img"
                src="https://images.unsplash.com/photo-1547894233-3b986939e29c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </Link>
          </div>
          <div className="col" style={{ textAlign: 'left' }}>
            <Link to="/article/233-sddee-ed" className="article-link">
              <h5>Dangers of some kind of Religion...</h5>
              <div><Link to="/profile" className="profile-link"><span>Diana Loren</span></Link></div>
              <div>10 mins read</div>
            </Link>

          </div>
        </div>
        <div className="row article-col">
          <div className="col-6">
            <Link to="/article/233-sddee-ed">
              <img
                className="article-img"
                src="https://images.unsplash.com/photo-1547894233-3b986939e29c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </Link>
          </div>
          <div className="col" style={{ textAlign: 'left' }}>
            <Link to="/article/233-sddee-ed" className="article-link">
              <h5>Dangers of some kind of Religion...</h5>
              <div><Link to="/profile" className="profile-link"><span>Diana Loren</span></Link></div>
              <div>10 mins read</div>
            </Link>

          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md most-read-articles">
        <h4 className="text-center">Most Read Articles</h4>
        <Link className="article-link" to="/">
          <div className="card w-30 text-center">
            <div className="card-body">
              <h6 className="card-title">Article title</h6>
              <p className="card-text">
                This is a wider card with supporting
                text below as a natural lead-in
              </p>
              <p className="card-text">
                <small className="text-muted row">
                  <span className="col">Diana Loren</span>
                  <span className="col">2 mins read</span>
                </small>
              </p>
            </div>
          </div>
        </Link>
        <Link
          className="article-link"
          to="/"
        >
          <div className="card w-30 text-center">
            <div className="card-body">
              <h5 className="card-title">Article title</h5>
              <p className="card-text">
                This is a wider card with supporting
                text below as a natural lead-in to.
              </p>
              <p className="card-text">
                <small className="text-muted row">
                  <span className="col">Andrew Gareth</span>
                  <span className="col">10 mins read</span>
                </small>
              </p>
            </div>
          </div>
        </Link>
        <Link className="article-link" to="/">
          <div className="card w-30 text-center">
            <div className="card-body">
              <h5 className="card-title">Article title</h5>
              <p className="card-text">
                This is a wider card with supporting
                text below as a natural lead-in to.
              </p>
              <p className="card-text">
                <small className="text-muted row">
                  <span className="col">Tony Nwosu</span>
                  <span className="col">5 mins read</span>
                </small>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

BuzzSection.propTypes = {};

export default BuzzSection;
