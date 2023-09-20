import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { Title } = useParams();
  const movie = movies.find((m) => m.title === Title);
  return (
    <div>
      <div>
        <img src={movie.image} alt="movieimage" />
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
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
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
  })
};
