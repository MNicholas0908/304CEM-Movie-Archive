import React from "react";
import { Link } from "react-router-dom";
import "./bootstrap.css";
import "../pages/favourite";
//import InsertData from "../mongodbinsert";

const Favbutton = () => {
  return (
    <div>
      <Link to={`/favourite`} className="btn btn-danger">
        Add Favourite
      </Link>
    </div>
  );
};

export default Favbutton;
