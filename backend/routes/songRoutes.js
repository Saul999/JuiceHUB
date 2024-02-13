import {
  addNewSong,
  getSongs,
  getSongWithID,
  updateSong,
  deleteSong,
} from "../controllers/songControllers";

const routes = (app) => {
  app
    .route("/songs")
    //Get ENDPOINT
    .get(getSongs)
    //POST ENDPOINT
    .post(addNewSong);

  app
    .route("/songs/:SongId")
    //get specific song
    .get(getSongWithID)
    // update specific song
    .put(updateSong)
    // delete song
    .delete(deleteSong);
};

export default routes;
