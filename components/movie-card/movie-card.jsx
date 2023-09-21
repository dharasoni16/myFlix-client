import React, { useEffect } from "react";
// import proptypes library here
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export const MovieCard = ({ user, setUser, token, movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user.FavoriteMovies && user.FavoriteMovies.includes(movie.id)) {
      setIsFavorite(true);
    }
  }, []);

  const addToFavoriteMovie = () => {
    fetch(
      `https://movie-api-0fqq.onrender.com/users/${user.Username}/movies/${movie.id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        alert("Movie is Successfully added to Favoritelist");
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        setIsFavorite(true);
      })
      .catch((err) => {
        console.log("error :" + err);
      });
  };

  const deleteFromFavoriteMovie = () => {
    fetch(
      `https://movie-api-0fqq.onrender.com/users/${user.Username}/movies/${movie.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setIsFavorite(false);
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        alert("Movie has been removed from Favoritelist");
      })
      .catch((err) => {
        console.log("error :" + err);
      });
  };

  return (
    <Card className="h-100 my-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director.Name}</Card.Text>
        <Link to={`/movies/${movie.title}`}>
          <Button variant="link">Details</Button>
        </Link>
      </Card.Body>
      <Card.Footer>
        {!isFavorite ? (
          <Button variant="dark" onClick={addToFavoriteMovie}>
            Add To FavoriteList
          </Button>
        ) : (
          <Button variant="dark" onClick={deleteFromFavoriteMovie}>
            Remove From FavoriteList
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};

// define all the props constrainsts for Moviecard

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
