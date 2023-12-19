import { Route, Routes } from "react-router-dom";
import AddToWatchlist from "./pages/AddToWatchlist";
import Home from "./pages/Home";
import Watched from "./pages/Watched";
import Watchlist from "./pages/Watchlist";
import { GlobalProvider } from "./context/GlobalState";
import Discover from "./pages/Discover";

// https://github.com/MattDobsonWeb/movie-watchlist-react/blob/master/src/App.js

function App() {
  return (
    <div className="p-0 m-0 box-border before:box-border after:box-border">
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<AddToWatchlist />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </GlobalProvider>
    </div>
  );
}

export default App;
