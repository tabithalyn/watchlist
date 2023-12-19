import { useContext } from "react";
import { GlobalContext, ListContext, MovieType } from "../context/GlobalState";
import moment from "moment";

const ResultCard = ({ movie }:{movie:MovieType}) => {
  const {
    addToWatchlist,
    addToWatched,
    watchlist,
    watched
  } = useContext<ListContext>(GlobalContext);

  const storedMovie = watchlist.find(
    (o) => o.id === movie.id);
  const storedMovieWatched = watched.find(
    (o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="flex mb-5">
      <div>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className="bg-[#dbdada] w-20 h-28 rounded-md mr-4 block text-transparent"
          />
        ) : (
          <div className="bg-[#dbdada] w-20 h-28 rounded-md mr-4 block text-transparent" />
        )}
      </div>
      <div className="flex flex-col justify-between">
        <div className="bg-[#032541]">
          <h3 className="m-0 text-[#032541] font-bold text-xl">{movie.title}</h3>
          <h4 className="m-0 text-[#032541] font-light text-xl">
            {moment().format("YYYY")}
            {movie.release_date}
          </h4>
        </div>
        <div>
          <button
            className="py-2 px-4 rounded-md uppercase font-bold inline-block border-none text-base transition-all bg-[#21d07a] text-[#032541] hover:bg-[#1aa762] hover:cursor-pointer"
            disabled={watchlistDisabled}
            onClick={() => addToWatchlist(movie)}
          >
            Add to Watchlist
          </button>
          <button
            className="py-2 px-4 rounded-md uppercase font-bold inline-block border-none text-base transition-all bg-[#21d07a] text-[#032541] hover:bg-[#1aa762] hover:cursor-pointer"
            disabled={watchedDisabled}
            onClick={() => addToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default ResultCard;