import React from "react";
import { createRoot } from "react-dom/client";
import { MainView } from "../components/main-view/main-view";
import Container from "react-bootstrap/Container";

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
    <Container fluid>
      <MainView />
      <footer className="text-white text-center">
        Image by{" "}
        <a href="https://www.freepik.com/free-photo/movie-background-collage_33752471.htm#page=2&query=movie%20background&position=8&from_view=keyword&track=ais">
          Freepik
        </a>
      </footer>
    </Container>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
