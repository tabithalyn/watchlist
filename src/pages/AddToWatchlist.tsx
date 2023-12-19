import { SetStateAction, useState } from "react";
import ResultCard from "../components/ResultCard";
import { Link } from "react-router-dom";

const BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key="
const API_KEY = import.meta.env.VITE_API_KEY;

const AddToWatchlist = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(`${BASE_URL}${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }

  return (
    <>
      <div className="px-auto py-4">
        <div className="px-0 py-12 max-w-[600px] my-0 mx-auto">
          <div>
            <span><Link to="/">Home</Link></span>
            <input
              type="text"
              value={query}
              onChange={onChange}
              className="w-full bg-[#032541] p-2 rounded-md border-none text-white text-xl focus:outline-none"
              placeholder="Search..."
              id="search"
            />
          </div>
          {results.length > 0 && (
            <ul className="p-0 mt-5">
              {results.map((movie, index) => (
                <li key={index} className="list-none">
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
 
export default AddToWatchlist;