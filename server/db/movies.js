import mongoose, { mongo } from "mongoose";

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  // imageLink: {
  //   type: String,
  //   required: true,
  // },
  reviews: {
    // type: [Number, String], // Could be used for unique keys for
    // each review but mongo surely has something more practical.
    type: [String],
    required: false,
  },
});

const Movie = mongoose.model("movie", movieSchema);

export default Movie;
