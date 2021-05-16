import React, { useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import './Crew.scss';
import { IMAGE_URL } from '../../../../services/movie.services';

const Crew = (props) => {
  const { movie } = props;
  const [credits] = useState(movie[1]);
  return (
    <>
      <div className="cast">
        <div className="div-title">Crew</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="head">Department</th>
              <th className="head">Job</th>
            </tr>
          </thead>
          <tbody>
            {credits.crew.map((data) => (
              <tr key={uuidv4()}>
                <td>
                  <img src={data.poster_path ? `${IMAGE_URL}${data.poster_path}` : 'http://placehold.it/54x81'} alt="" />
                </td>
                <td>{data.name}</td>
                <td>{data.department}</td>
                <td>{data.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

Crew.propTypes = {
  movie: propTypes.array
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps, {})(Crew);
