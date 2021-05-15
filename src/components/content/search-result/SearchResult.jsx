/* eslint-disable react/prop-types */
import React, { useState, useEffect, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';

import './SearchResult.scss';
import '../grid/Grid.scss';
import Rating from '../rating/Rating';
import { connect } from 'react-redux';
import { IMAGE_URL } from '../../../services/movie.services';
import LazyImage from '../../lazy-image/LazyImage';

const SearchResult = (props) => {
  const { searchResult, searchQuery } = props;
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    setMovieData(searchResult);
  }, [searchResult]);

  return (
    <div className="searchKeyword">
      <div className="grid-search-title">
        <span className="grid-text-1">Youre search keyword</span>
        <span className="grid-text-1">{searchQuery}</span>
      </div>

      <div className="grid">
        {movieData.map((data, i) => (
          <Fragment key={uuidv4()}>
            {data.poster_path && (
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
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
SearchResult.prototype = {
  searchResult: propTypes.array.isRequired,
  searchQuery: propTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  searchResult: state.movies.searchResult,
  searchQuery: state.movies.searchQuery
});

export default connect(mapStateToProps, {})(SearchResult);
