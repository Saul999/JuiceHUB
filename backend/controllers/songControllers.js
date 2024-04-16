import mongoose from "mongoose";
import { SongSchema } from "../models/songsModel";

const Song = mongoose.model("Songs", SongSchema);

// ADD NEW SONG | POST

export const addNewSong = (req, res) => {
  let newSong = new Song(req.body);

  newSong
    .save()
    .then((savedSong) => {
      res.json(savedSong);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// GET NEW SONG | GET

export const getSongs = async (req, res) => {
  try {
    const songs = await Song.find({});
    res.json(songs);
  } catch (error) {
    res.status(500).send(error);
  }
};

// GET 1 SONG | GET + :id

export const getSongWithID = async (req, res) => {
  try {
    const songs = await Song.findById(req.params.SongId);
    res.json(songs);
  } catch (error) {
    res.status(500).send(error);
  }
};

// UPDATE SONG | PUT

export const updateSong = async (req, res) => {
  try {
    const songs = await Song.findOneAndUpdate(
      { _id: req.params.SongId },
      req.body,
      { new: true }
    );
    res.json(songs);
  } catch (error) {
    res.status(500).send(error);
  }
};

// DELETE SONG | DElETE

export const deleteSong = async (req, res) => {
  //   try {
  //     Song.deleteOne({ _id: req.params.SongId });
  //     res.json({ message: "Successfully Delete Song" });
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  try {
    const songId = req.params.SongId; // Corrected parameter name
    console.log("Deleting song with ID:", songId);
    const result = await Song.deleteOne({ _id: songId });
    console.log("Delete result:", result);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json({ message: "Successfully deleted a song" });
  } catch (error) {
    console.error("Error deleting song:", error);
    res.status(500).send(error.message);
  }
};
