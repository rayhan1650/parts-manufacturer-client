import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div id="not-found">
      <div className="not-found">
        <div className="relative">
          <img
            className="animate-pulse px-10 mx-auto"
            src="https://i.ibb.co/nzBpK9k/NotFound.jpg"
            alt=""
          />
        </div>

        <div className="not-found-404">
          <h1>404</h1>
          <h2 className="animate-bounce">Page not found</h2>
        </div>
        <Link to="/">Homepage</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
