import React from "react";
// import proptypes library here
import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};

// define all the props constrainsts for Moviecard

MovieCard.propTypes={
  movie:PropTypes.shape({
    title:PropTypes.string.isRequired
  }).isRequired,
  onMovieClick : PropTypes.func.isRequired  
};
