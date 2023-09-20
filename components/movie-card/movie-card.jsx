import React from "react";
// import proptypes library here
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; 

export const MovieCard = ({movie}) => {
  return (
    <Card className="h-100 my-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director.Name}</Card.Text>
        <Link to={"/movies/"+ movie.title}>
        <Button  variant="link">
          Open
        </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

// define all the props constrainsts for Moviecard

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
