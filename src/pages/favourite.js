import React, { Component } from "react";
import FavTitle from "../components/favouritetitle";
import ButtonBack from "../components/buttonBack";
import "./font.css";
import './bootstrap.css';

class FavMovies extends Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <FavTitle/>
        <br></br>
        <ButtonBack/>
      </div>
    );
  }
}

export default FavMovies;