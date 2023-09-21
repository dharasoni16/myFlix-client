import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { Title } = useParams();
  const movie = movies.find((m) => m.title === Title);
  return (
    <Row className="my-4 mx-auto container-height">
      <Col md={6}>
        <Card className="bg-dark text-white">
          <Card.Body>
            <Card.Title>
              <span className="heading">Title : </span>
              <span>{movie.title}</span>
            </Card.Title>
            <Card.Text>
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
            </Card.Text>
            <Link to={`/`}>
              <button className="back-button">Back</button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="bg-dark text-white" style={{ width: "23rem" }}>
          <Card.Img variant="top" src={movie.image} />
        </Card>
      </Col>
    </Row>
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
  }),
};
