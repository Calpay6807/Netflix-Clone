import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";
import { options } from "../constants/constants";
import { baseImgUrl } from "../constants/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListMovies = ({ genre }) => {
  const [category, setCategory] = useState([]);
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${genre.page}&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((res) => setCategory(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  if (state.isLoading === true) return "Loading..";
  return (
    <div className="p-2">
      <h1>{genre.name}</h1>
      <div className="splide">
        <Splide options={{ perPage: 4, gap: "1rem", type: "slide" }}>
          {category.map((item) => (
            <SplideSlide key={item.id}>
              <Link to={`/movie/${item.id}`}>
                <div className="card">
                  <img
                    className="card-img-top shadow"
                    src={`${baseImgUrl}${item.backdrop_path}`}
                    alt=""
                  />
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default ListMovies;
