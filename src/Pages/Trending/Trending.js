import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Trending.css";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Trending = (props) => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=112ffb03122bef7933b7dc7b9e8252fd&page=${page}`
    );
    console.log(data);
    setContent(data.results);
  };
  useEffect(() => {
    window.scroll(0,0)
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Trending</span>
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
                media_type={element.media_type}
                vote_average={element.vote_average}
              />
            );
          })}
      </div>
      <CustomPagination page={page} setPage={setPage} numberOfpages={10}/>
    </div>
  );
};

export default Trending;
