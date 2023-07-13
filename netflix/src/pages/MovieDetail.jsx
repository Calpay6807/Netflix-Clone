import React, { useEffect, useState } from "react";
import axios from "axios";
import { options } from "../constants/constants";
import { useParams } from "react-router-dom";
import { baseImgUrl } from "../constants/constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ReactPlayer from "react-player";

const MovieDetail = ({ item }) => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [fragman, setFragman] = useState(null);
  const { movie_id } = useParams();

  useEffect(() => {
    // API'den film verilerini almak için bir çağrı yapın
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}/credits`, options)
      .then((response) => {
        setCredits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, options)
      .then((response) => {
        setFragman(response.data.results[0]);
        // Fragman verilerini kullanmak için burada işlemler yapabilirsiniz
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(fragman);

  if (!movie) {
    return <div>Loading...</div>;
  }
  if (!credits) {
    return <div>Loading...</div>;
  }
  if (!fragman) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="movie-detail row p-4">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="position-relative " style={{ maxWidth: "400px" }}>
            <img
              className="img-fluid rounded shadow-lg"
              src={`${baseImgUrl.concat(movie.poster_path)}`}
              alt=""
            />
            <span className="position-absolute bg-warning rounded p-1 shadow bottom-0 end-0 mb-3 me-4">
              {movie.vote_average}
            </span>
          </div>
        </div>
        <div className="col-md-8 d-flex flex-column justify-content-center">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <div className="row">
            <div>
              <h2 className="badge bg-danger">{fragman.name}</h2>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${fragman.key}`}
                controls
                width="560px"
                height="315px"
              />
            </div>

            <div className="col-6 col-md-12">
              <p>Maliyet: {movie.budget}</p>
              <p>Hasilat: {movie.revenue}</p>
            </div>
            <div className="col-6 col-md-12">
              <div className="d-flex gap-3">
                Kategoriler:
                {movie.genres.map((genre) => (
                  <p className="badge bg-primary">{genre.name}</p>
                ))}
              </div>

              <div className="d-flex gap-3">
                Diller:
                {movie.spoken_languages.map((lang) => (
                  <p className="badge bg-danger">{lang.name}</p>
                ))}
              </div>

              <div className="d-flex gap-3">
                Yapimci Şirketler:
                {movie.production_companies.map((comp) => (
                  <p className="badge bg-success">{comp.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Splide options={{ perPage: 4, gap: "1rem", type: "slide" }}>
          {credits.crew.map((item) => (
            <SplideSlide>
              <p className="badge bg-info">{item.name}</p>
              <img
                className="card-img-top rounded shadow"
                style={{ maxWidth: "300px" }}
                src={`${baseImgUrl}${item.profile_path}`}
                alt=""
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default MovieDetail;
