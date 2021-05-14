/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';

import './Grid.scss';
import Rating from '../rating/Rating';
import { connect } from 'react-redux';
import { IMAGE_URL } from '../../../services/movie.services';
import LazyImage from '../../lazy-image/LazyImage';

const Grid = (props) => {
  const { list } = props;
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    setMovieData(list);
  }, [list]);

  return (
    <>
      <div className="grid">
        {movieData.map((data, i) => (
          <div key={uuidv4()}>
            <LazyImage className="grid-cell" src={`${IMAGE_URL}${data.poster_path}`}>
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">{data.title}</span>
                <div className="grid-detail-rating">
                  <Rating rating={data.vote_average} totalStars={10} />
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">{data.vote_average}</div>
                </div>
              </div>
            </LazyImage>
          </div>
        ))}
      </div>
    </>
  );
};
Grid.prototype = {
  list: propTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  list: state.movies.list
});

export default connect(mapStateToProps, {})(Grid);
