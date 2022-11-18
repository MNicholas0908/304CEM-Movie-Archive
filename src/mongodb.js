const mongoose = require("mongoose");
const db = "mongodb+srv://Nicholas:NickAPITest@cluster0.jmmxbcx.mongodb.net/Movie?retryWrites=true&w=majority";

console.log(mongoose.connect(db));
mongoose.connect(db).then(()=>{
    console.log("Connected to database");
}).catch(()=>{
    console.log("Error connecting to database");
});

const movieSchema = new mongoose.Schema({
    imdbID:{type:String},
});

const Movie = mongoose.model('FavMovies',movieSchema);

module.exports = Movie;