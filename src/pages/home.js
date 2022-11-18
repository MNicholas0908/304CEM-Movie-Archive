import React, { Component } from "react";

import Title from "../components/title";
import SearchBar from "../components/search-bar";
import MoviesList from "../components/moviesList";
import "./font.css"

class Home extends Component {
  state = {
    busquedaInicial: false,
    data: [],
  };

  handleResults = (data) => {
    this.setState({ data, busquedaInicial: true });
  };

  renderResult() {
    return this.state.data.length === 0 ? (
      <p>No results</p>
    ) : (
      <MoviesList moviesList={this.state.data} />
    );
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <img
          src="https://cdn.digitbin.com/wp-content/uploads/Top-best-Android-Apps-to-watch-and-stream-free-movies-online.jpg"
          alt="Movie"
        ></img>
        <br></br>
        <br></br>
        <Title/>
        <br></br>
        <br></br>
        <div className="search-wrapper">
          <SearchBar onResults={this.handleResults} />
        </div>
        <br></br>
        {this.state.busquedaInicial ? this.renderResult() : <div></div>}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Home;
