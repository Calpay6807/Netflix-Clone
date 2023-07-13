import "./App.css";
import MainPages from "./pages/MainPages";
import MovieDetail from "./pages/MovieDetail";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/movie/:movie_id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
