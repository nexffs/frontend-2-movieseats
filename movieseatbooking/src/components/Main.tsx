import { useCallback, useState } from "react";
import Movies from "../scripts/LoadMovies";
import useHandleSeatClick from "../scripts/HandleClicks";
import type { Movie } from "../scripts/MovieList";


export default function Main() {
  const [selectedMovieId, setSelectedMovieId] = useState<number>(0);
  const [selectedSeatKeys, setSelectedSeatKeys] = useState<string[]>([]);
  const handleSeatClick = useHandleSeatClick(setSelectedSeatKeys);
  const [selectedMoviePrice, setSelectedMoviePrice] = useState<number>(0);
  const handleSelectedMovie = useCallback((movie: Movie) => {
    setSelectedMovieId(movie.id);
    setSelectedMoviePrice(movie.Price);
    setSelectedSeatKeys([]);
    document.querySelectorAll(".container .seat.selected").forEach((seat) => {
      seat.classList.remove("selected");
    });
  }, []);

  return (
    <div className="app">
    <div className="movie-container">
      <label htmlFor="movie">Pick a movie:</label>
      <Movies onSelectedMovie={handleSelectedMovie} />
    </div>
    <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>
    <div className="container" onClick={handleSeatClick} key={selectedMovieId}>
      <div className="screen"></div>
      <div className="row">
        <div className="seat" data-seatkey="r0s1"></div>
        <div className="seat" data-seatkey="r0s2"></div>
        <div className="seat" data-seatkey="r0s3"></div>
        <div className="seat" data-seatkey="r0s4"></div>
        <div className="seat" data-seatkey="r0s5"></div>
        <div className="seat" data-seatkey="r0s6"></div>
        <div className="seat" data-seatkey="r0s7"></div>
        <div className="seat" data-seatkey="r0s8"></div>
      </div>
      <div className="row">
        <div className="seat" data-seatkey="r1s1"></div>
        <div className="seat" data-seatkey="r1s2"></div>
        <div className="seat" data-seatkey="r1s3"></div>
        <div className="seat occupied" data-seatkey="r1s4"></div>
        <div className="seat occupied" data-seatkey="r1s5"></div>
        <div className="seat" data-seatkey="r1s6"></div>
        <div className="seat" data-seatkey="r1s7"></div>
        <div className="seat" data-seatkey="r1s8"></div>
      </div>
      <div className="row">
        <div className="seat" data-seatkey="r2s1"></div>
        <div className="seat" data-seatkey="r2s2"></div>
        <div className="seat" data-seatkey="r2s3"></div>
        <div className="seat" data-seatkey="r2s4"></div>
        <div className="seat" data-seatkey="r2s5"></div>
        <div className="seat" data-seatkey="r2s6"></div>
        <div className="seat occupied" data-seatkey="r2s7"></div>
        <div className="seat occupied" data-seatkey="r2s8"></div>
      </div>
      <div className="row">
        <div className="seat" data-seatkey="r3s1"></div>
        <div className="seat" data-seatkey="r3s2"></div>
        <div className="seat" data-seatkey="r3s3"></div>
        <div className="seat" data-seatkey="r3s4"></div>
        <div className="seat" data-seatkey="r3s5"></div>
        <div className="seat" data-seatkey="r3s6"></div>
        <div className="seat" data-seatkey="r3s7"></div>
        <div className="seat" data-seatkey="r3s8"></div>
      </div>
      <div className="row">
        <div className="seat" data-seatkey="r4s1"></div>
        <div className="seat" data-seatkey="r4s2"></div>
        <div className="seat" data-seatkey="r4s3"></div>
        <div className="seat occupied" data-seatkey="r4s4"></div>
        <div className="seat occupied" data-seatkey="r4s5"></div>
        <div className="seat" data-seatkey="r4s6"></div>
        <div className="seat" data-seatkey="r4s7"></div>
        <div className="seat" data-seatkey="r4s8"></div>
      </div>
      <div className="row">
        <div className="seat" data-seatkey="r5s1"></div>
        <div className="seat" data-seatkey="r5s2"></div>
        <div className="seat" data-seatkey="r5s3"></div>
        <div className="seat" data-seatkey="r5s4"></div>
        <div className="seat occupied" data-seatkey="r5s5"></div>
        <div className="seat occupied" data-seatkey="r5s6"></div>
        <div className="seat occupied" data-seatkey="r5s7"></div>
        <div className="seat" data-seatkey="r5s8"></div>
      </div>
    </div>
    <p className="text">
      You have selected <span id="count">{selectedSeatKeys.length}</span> seats for a price of <span
        id="total"
        >{selectedSeatKeys.length*selectedMoviePrice}</span>kr
    </p>
    </div>
  )
}