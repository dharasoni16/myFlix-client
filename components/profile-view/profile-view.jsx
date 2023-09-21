import React from "react";
import { useState } from "react";
import { Card, Form, Button, Modal } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({ user, setUser, token, movies }) => {
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.Email);
  const [birthdate, setBirthdate] = useState(user.Birthdate);
  const [showModal, setshowModal] = useState(false);
  const [deregister, setDeregister] = useState(false);

  const favoriteMovies = movies.filter((movie) =>
    user.FavoriteMovies?.includes(movie.id)
  );

  const handleShowModal = () => setshowModal(true);
  const handleHideModal = () => setshowModal(false);

  const handleUpdateUser = () => {
    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthdate: birthdate,
    };

    fetch(`https://movie-api-0fqq.onrender.com/users/${user.Username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user.Username));
          setUser(user);
          alert("Your details has been updated");
        } else {
          alert("Could not Update the details, Something went wrong!");
        }
      });
    setshowModal(false);
  };

  const handleDeleteUser = () => {
    fetch(`https://movie-api-0fqq.onrender.com/users/${user.Username}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        console.log(response);
        alert("Your Account Has Been Deleted");
        setUser(null);
        localStorage.clear();
        window.location.reload();
      } else {
        alert("Something went wrong!");
      }
    });
    setDeregister(false);
  };

  const handleDeregister = () => setDeregister(true);
  const hideDeregister = () => setDeregister(false);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>My Profile</Card.Title>
              <Card.Text>
                Username : {username}
                <br />
                Email : {email}
              </Card.Text>
              <Button variant="dark" onClick={handleShowModal} className="mx-2">
                Update Profile
              </Button>
              <Button variant="dark" onClick={handleDeregister}>
                Delete Your Account
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2>Favorite Movies</h2>
        {favoriteMovies.map((movie) => (
          <Col>
            <MovieCard
              user={user}
              setUser={setUser}
              token={token}
              movie={movie}
            />
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                minLength={5}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBirthdate">
              <Form.Label>Birthdate</Form.Label>
              <Form.Control
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={deregister} onHide={hideDeregister}>
        <Modal.Header closeButton>
          <Modal.Title>Account Deregistration</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to Delete Your Account?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideDeregister}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDeleteUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
