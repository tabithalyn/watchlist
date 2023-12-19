import { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { GlobalContext, MovieType } from "../context/GlobalState";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="py-7 px-0">
      <div className="px-auto py-4">
        <div className="flex flex-wrap items-center justify-center mb-7">
          <span><Link to="/">Home</Link></span>
          <h1 className="m-0 text-[#032541] w-full text-center">My Watchlist</h1>
          <span className="py-1 px-4 text-lg font-bold rounded-[999px] bg-[#21d07a] text-[#032541]">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watchlist.length > 0 ? (
          <div className="grid grid-cols-4 gap-7">
            {watchlist.map((movie:MovieType, index:number) => (
              <MovieCard movie={movie} key={index} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="text-center text-[#c4c4c4] text-5xl">
            No movies in your list yet!
          </h2>
        )}
      </div>
    </div>
  );
}
 
export default Watchlist;