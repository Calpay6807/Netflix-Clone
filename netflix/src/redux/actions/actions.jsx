import axios from "axios";
import { ActionTypes } from "../../constants/actionTypes";
import { options } from "../../constants/constants";

//action oluşturan bir fonksiyon
export const setLaoding = (payload) => ({
  type: ActionTypes.SET_LOADİNG,
  payload,
});

// hem verileri çeksin hem reducura aktarsın
export const getMovies = () => {
  return async function (dispatch) {
    //veri çekme işlemleri
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );
    dispatch({
      type: ActionTypes.SET_MOVİES,
      payload: res.data,
    });

    //gelen veriyi reducura aktarma
  };
};
export const getGenres = () => (dispatch) => {
  //kategori verilerini çekme
  axios
    .get("https://api.themoviedb.org/3/genre/movie/list?language=tr", options)
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    )
    .catch((err) => console.log(err));
};

//thunk fonksiyonu kısa yazımı

// export const kisaYazim = () => async (dispatch) => {};
