import React from "react";
import { Link } from "react-router-dom";
import "./bootstrap.css";
import "../pages/favourite";

const ButtonBack = () => {
  return (
    <div>
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
};

export default ButtonBack;
