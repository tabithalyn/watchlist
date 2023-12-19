import { MovieType } from "../context/GlobalState";
import MovieControls from "./MovieControls";

const MovieCard = ({type, movie}:{
  type: string;
  movie: MovieType;
}) => {
  return (
    <div className="w-full rounded-md overflow-hidden relative b-0 block p-2">
      <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent transition-all hover:border-4 hover:border-[#21d07a]"></div>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} className="w-full block" />
      <span className="font-bold text-xs tracking-tighter line-clamp-1">{movie.title}</span>
      <MovieControls type={type} movie={movie} />
    </div>
  );
}
 
export default MovieCard;