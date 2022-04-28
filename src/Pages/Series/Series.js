import axios from "axios";
import React, { useEffect, useState } from "react";
import Genres from "../../components/Genres";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenres from "../../hooks/useGenres";

const Series = (props) => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfpages, setNumberOfpages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=112ffb03122bef7933b7dc7b9e8252fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}&with_watch_monetization_types=flatrate`
    );
    setContent(data.results);
    console.log(data.total_pages);
    setNumberOfpages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL]);
  return (
    <div>
      <span className="pageTitle">Discover Series</span>
      <Genres
        type="movie"
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((element) => {
            return (
              <SingleContent
                key={element.id}
                id={element.id}
                poster={element.poster_path}
                title={element.title || element.name}
                date={element.first_air_date || element.release_date}
                media_type="tv"
                vote_average={element.vote_average}
              />
            );
          })}
      </div>
      {numberOfpages > 1 && (
        <CustomPagination
          page={page}
          setPage={setPage}
          numberOfpages={numberOfpages < 15 ? numberOfpages : 15}
        />
      )}
    </div>
  );
};

export default Series;
