import React from 'react';
import Rating from '../rating/Rating';
import Tabs from '../tabs/Tabs';
import './Details.scss';
import Overview from './overview/Overview';
import Crew from './crew/Crew';
import Media from './media/Media';
import Reviews from './reviews/Reviews';
const Details = () => {
  return (
    <>
      <div className="movie-container">
        <div
          className="movie-bg"
          style={{
            backgroundImage: 'url(https://northbridgecos.com/wp-content/uploads/2016/01/Nikon-1-V3-sample-photo-150x150.jpg)'
          }}
        ></div>
        <div className="movie-overlay"></div>
        <div className="movie-details">
          <div className="movie-image">
            <img src="https://northbridgecos.com/wp-content/uploads/2016/01/Nikon-1-V3-sample-photo-150x150.jpg" alt="" />
          </div>
          <div className="movie-body">
            <div className="movie-overview">
              <div className="title">
                Avengers <span>2020-11-02</span>
              </div>
              <div className="movie-genres">
                <ul className="genres">
                  <li>Action</li>
                  <li>Comedy</li>
                  <li>Sci-Fi</li>
                </ul>
              </div>
              <div className="rating">
                <Rating rating={5} className="rating-stars" totalStars={10} />
                &nbsp;
                <span>6.7</span> <p>(200) Reviews</p>
              </div>
              <Tabs>
                <div label="Overview">
                  <Overview />
                </div>
                <div label="Crew">
                  <Crew />
                </div>
                <div label="Media">
                  {' '}
                  <Media />
                </div>
                <div label="Reviews">
                  {' '}
                  <Reviews />
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
