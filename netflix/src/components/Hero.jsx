import React from "react";
import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants/constants";

const Hero = () => {
  //abone olma işlemi (storda tutlan verileri erişme)
  const state = useSelector((store) => store.movieReducer);

  // dizinin uzunluğuna göre rastgele sayı bulma
  const i = Math.floor(Math.random() * state.popularMovies.length);

  // dizide rastgele bir film alma
  const movie = state.popularMovies[i];

  return (
    <div className="d-flex row p-4">
      {/*Yüklenme sürüyosa ekrana loading bas */}
      {state.isLoading && <p>Loading..</p>}
      {/* Yüklenme bittiyse */}
      {!state.isLoading && (
        <>
          <div className="col-md-6 gap-3 mb-3 d-flex flex-column justify-content-center">
            <h1>{movie.title}</h1>
            <p className="lead">{movie.overview}</p>
            <p className="text-warning fw-bold">IMDB: {movie.vote_average}</p>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-danger">Filmi İzle</button>
              <button className="btn btn-info">Listeye Ekle</button>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <img
              className="img-fluid rounded shadow"
              src={`${baseImgUrl}${movie.backdrop_path}`}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
