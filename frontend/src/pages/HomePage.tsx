import ListSongs from "../components/ListSongs";
import SongAttributes from "../components/SongAttributes";
// import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <>
      <SongAttributes></SongAttributes>
      <ListSongs></ListSongs>
    </>
  );
}
