import { useState, useEffect } from "react";

const BASE_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
const API_KEY = import.meta.env.VITE_API_KEY;

type ItemType = {
  title: string;
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
    <>
    {
      data.map((item:ItemType, id:number) => (
        <div key={id}>
          {item.title}
        </div>
      ))
    }
    </>
  );
}
 
export default Upcoming;