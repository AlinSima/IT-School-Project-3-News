import React from "react";
import { Link } from "react-router-dom";
import styles from "./Page404.module.css";
import Container from "react-bootstrap/Container";

function Page404() {
  return (
    <div
      className={`${styles.page404} bg-primary text-white d-flex flex-column justify-content-center align-items-center`}
    >
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className="h4 text-center">
          The page you tried to access no longer exists.
        </p>
        <strong className={`${styles.error404}`}>404 :(</strong>
        <p className="h4 text-center">
          Go{" "}
          <Link to="/" className="text-secondary">
            back to the site
          </Link>{" "}
          to see a new news
        </p>
      </Container>
    </div>
  );
}

export default Page404;
