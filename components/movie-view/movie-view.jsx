import React from "react";
import PropTypes from "prop-types";
import "./movie-view.scss";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.image} alt="movie image" />
      </div>
      <div>
        <span className="heading">Title : </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span className="heading">Description : </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span className="heading">Genre : </span>
        <span>{movie.genre.Name}</span>
      </div>
      <div>
        <span className="heading">Director : </span>
        <span>{movie.director.Name}</span>
      </div>
      <button onClick={onBackClick} className="back-button">
        Back
      </button>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
    director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
