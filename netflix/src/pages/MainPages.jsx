import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../constants/actionTypes";
import Hero from "../components/Hero";
import { getGenres, getMovies, setLaoding } from "../redux/actions/actions";
import ListMovies from "../components/ListMovies";
const MainPages = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);
  useEffect(() => {
    // loadingi true yapar
    dispatch(setLaoding(true));

    //popular film verisini çek
    dispatch(getMovies());

    // kategori verilerini çek ve stora aktar
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {/* Kategorilere göre listeleme yapıyoruz */}
      {state.genres.map((genre) => (
        <ListMovies key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPages;
