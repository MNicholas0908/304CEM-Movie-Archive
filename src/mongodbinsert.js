function InsertData() {
  const Movie = require("./mongodb");
  const axios = require("axios");
  const api_key = "2f84122";
  const id = "tt4154796";

  const querystr = `http://www.omdbapi.com/?apikey=${api_key}&i=${id}`;

  var imdbID;
  var movieValue;

  axios.get(querystr).then((response) => {
    imdbID = response.data.imdbID;
    console.log(imdbID);

    movieValue = Movie({
      imdbID: imdbID,
    });

    movieValue
      .save()
      .then((result) => {
        console.log("Success" + result);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  });
}
export default InsertData;
