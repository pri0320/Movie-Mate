import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  type,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    // console.log(selectedGenres);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=112ffb03122bef7933b7dc7b9e8252fd&language=en-US`
    );
      
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    // eslint-disable-next-line

    // return () => {
    //   setGenres([]);
    // };
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: "2px" }}
            key={genre.id}
            size="small"
            color="primary"
            clickable
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {/* {console.log(genres)} */}
      {genres &&
        genres.length !== 0 &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: "2px" }}
            key={genre.id}
            size="small"
            clickable
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
