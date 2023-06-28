import express from "express";
import mongoose from "mongoose";
import Movie from "../db/movies.js";

const router = express.Router();

// 'localhost:5000/'

router.get("/", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.json(allMovies);
  } catch (error) {
    console.log(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) return;
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
  }
});
router.post("/", async (req, res) => {
  try {
    const movie = req.body;
    const createdMovie = await Movie.create(movie);
    res.status(201).json(createdMovie);
  } catch (error) {
    console.log(error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, releaseDate, rating, reviews } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("Movie not found.");
    const updatedMovie = {
      title,
      description,
      releaseDate,
      rating,
      reviews,
      _id: id,
    };
    await Movie.findByIdAndUpdate(id, updatedMovie, { new: true });
    res.json(updatedMovie);
  } catch (error) {
    console.log(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndRemove(id);
    res.json({ message: "Movie deleted." });
  } catch (error) {
    console.log(error);
  }
});

export default router;
