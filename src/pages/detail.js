import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonBack from "../components/buttonBack";
import "./font.css";
import "./bootstrap.css";
import Favbutton from "../components/favbutton";

const api_key = "2f84122";

class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  };

  state = {
    data: {},
  };

  fetchData({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${api_key}&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        this.setState({ data });
      });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchData({ id });
  }

  goBack() {
    window.history.back();
  }

  render() {
    const {
      Title,
      Poster,
      Director,
      Writer,
      Plot,
      Actors,
      BoxOffice,
      Runtime,
    } = this.state.data;

    return (
      <div>
        <section>
          <div className="hero-body">
            <div className="container">
              <table class="table table-hover">
                <tr>
                  <th scope="row" className="titlefont">
                    {Title}
                  </th>
                </tr>
                <tr>
                  <th scope="row">
                    <img style={{ width: "300px" }} src={Poster} alt={Title} />
                  </th>
                </tr>
              </table>
              <table class="table table-hover">
                <tr>
                  <th scope="row">Director:</th>
                  <td>{Director}</td>
                </tr>
                <tr>
                  <th scope="row">Plot:</th>
                  <td>{Plot}</td>
                </tr>
                <tr>
                  <th scope="row">Writer:</th>
                  <td>{Writer}</td>
                </tr>
                <tr>
                  <th scope="row">Cast:</th>
                  <td>{Actors}</td>
                </tr>
                <tr>
                  <th scope="row">Duration:</th>
                  <td>{Runtime}</td>
                </tr>
                <tr>
                  <th scope="row">Box Office:</th>
                  <td>{BoxOffice}</td>
                </tr>
              </table>
              <ButtonBack/>
              <br></br>
              <Favbutton/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Detail;
