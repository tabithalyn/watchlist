import { useContext } from "react";
import { GlobalContext, ListContext, MovieType } from "../context/GlobalState";

const MovieControls = ({type, movie}:{
  type: string;
  movie: MovieType;
}) => {
  const {
    removeFromWatchlist,
    addToWatched,
    moveToWatchlist,
    removeFromWatched
  } = useContext<ListContext>(GlobalContext);

  return (
    <div className="opacity-100 z-20">
      {type === "watchlist" && (
        <>
        <button className="bg-teal-200 text-gray-900 border-none transition-all p-2 text-sm m-1 hover:text-[#21d07a] hover:cursor-pointer w-[95%]" onClick={() => addToWatched(movie)}>Add to Watched</button>
        <button className="bg-teal-200 text-gray-900 border-none transition-all p-2 text-sm m-1 hover:text-[#21d07a] hover:cursor-pointer w-[95%]" onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
        </>
      )}
      {type === "watched" && (
        <>
        <button className="bg-transparent text-gray-900 border-none transition-all p-2 text-sm m-0 hover:text-[#21d07a] hover:cursor-pointer w-[95%]" onClick={() => moveToWatchlist(movie)}>Move to Watchlist</button>
        <button className="bg-transparent text-gray-900 border-none transition-all p-2 text-sm m-0 hover:text-[#21d07a] hover:cursor-pointer w-[95%]" onClick={() => removeFromWatched(movie.id)}>Remove</button>
        </>
      )}
    </div>
  );
}
 
export default MovieControls;