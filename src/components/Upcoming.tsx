import moment from "moment";
import { useState, useEffect } from "react";
import formatGenre from "../utils/formatGenre";

const BASE_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
const API_KEY = import.meta.env.VITE_API_KEY;

type ItemType = {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
}

const Upcoming = () => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${BASE_URL}${API_KEY}&language=en-US&page=1`);
      const data = await res.json();
      setData(data.results);
    }
    getData();
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-center">
    <h1 className="w-full text-center p-4 text-5xl font-extrabold">Upcoming Movies</h1>
    {
      data.map((item:ItemType, id:number) => (
        <div key={id} className="w-[23.5%] bg-green-100 m-2 flex flex-wrap justify-center text-center">
          <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={`${item.title} Poster`} className="w-[150px]" />
          <h2 className="w-full text-xl leading-tight py-2 font-bold">{item.title}</h2>
          <span className="text-sm">
            {moment(item.release_date).format("MMMM Do YYYY")}
          </span>
          <p className="text-sm tracking-tight p-3 leading-tight text-left h-[150px] overflow-y-auto mb-2">{item.overview}</p>
          <div className="w-full flex flex-wrap p-2 justify-center gap-1">
            {
              item.genre_ids.map((genre, id) => (
                <p key={id}>
                  {formatGenre(genre)}
                </p>
              ))
            }
          </div>
        </div>
      ))
    }
    </div>
  );
}
 
export default Upcoming;