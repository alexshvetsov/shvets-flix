import React, { useEffect, useState } from 'react';
import Rating from '../rating/Rating';
import Tabs from '../tabs/Tabs';
import './Details.scss';
import Overview from './overview/Overview';
import Crew from './crew/Crew';
import Media from './media/Media';
import Reviews from './reviews/Reviews';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import { movieDetails } from '../../../redux/actions/movies';
import { IMAGE_URL } from '../../../services/movie.services';

const Details = (props) => {
  const { movieDetails, movie } = props;
  const { id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    if (movie.length === 0) {
      movieDetails(id);
    }
    console.log(movie);
    setDetails(movie[0]);
  }, [id, movie]);
  return (
    <>
      {details && (
        <div className="movie-container">
          <div
            className="movie-bg"
            style={{
              backgroundImage: `url(${IMAGE_URL}${details.backdrop_path})`
            }}
          ></div>
          <div className="movie-overlay"></div>
          <div className="movie-details">
            <div className="movie-image">
              <img src={`${IMAGE_URL}${details.poster_path}`} alt="" />
            </div>
            <div className="movie-body">
              <div className="movie-overview">
                <div className="title">
                  {details.title} <span>{details.release_data}</span>
                </div>
                <div className="movie-genres">
                  <ul className="genres">
                    {details.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="rating">
                  <Rating rating={details.vote_average} className="rating-stars" totalStars={10} />
                  &nbsp;
                  <span>{details.vote_average}</span> <p>({details.vote_count}) Reviews</p>
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
      )}
    </>
  );
};

Details.propTypes = {
  movie: propTypes.array,
  movieDetails: propTypes.func
};

const mapStateToProp = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProp, { movieDetails })(Details);
