import { ReactNode, useEffect, useReducer, createContext } from "react"
import AppReducer from "./AppReducer";

type GlobalProps = {
  children: ReactNode;
}

export type MovieType = {
  id: string;
  poster_path: string;
  title: string;
  release_date: string;
  payload: {
    id: string;
  }
}

export type ListContext = {
  addToWatchlist: (movie:MovieType) => void;
  removeFromWatchlist: (id:string) => void;
  addToWatched: (movie:MovieType) => void;
  moveToWatchlist: (movie:MovieType) => void;
  removeFromWatched: (id:string) => void;
  watchlist: string[];
  watched: string[];
}

const DISPATCH_TYPE = {
  addToWatchlist: "ADD_TO_WATCHLIST",
  removeFromWatchlist: "REMOVE_FROM_WATCHLIST",
  addToWatched: "ADD_TO_WATCHED",
  moveToWatchlist: "MOVE_TO_WATCHLIST",
  removeFromWatched: "REMOVE_FROM_WATCHED",
}

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist") || "")
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched") || "")
    : [],
  addToWatchlist: () => dispatchEvent,
  removeFromWatchlist: () => dispatchEvent,
  addToWatched: () => dispatchEvent,
  moveToWatchlist: () => dispatchEvent,
  removeFromWatched: () => dispatchEvent,
}

export const GlobalContext = createContext<ListContext>(initialState);

export const GlobalProvider = (props:GlobalProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addToWatchlist = (movie:MovieType) => {
    dispatch({ type: DISPATCH_TYPE.addToWatchlist, payload: movie });
  }
  const removeFromWatchlist = (id:string) => {
    dispatch({ type: DISPATCH_TYPE.removeFromWatchlist, payload: id });
  }

  const addToWatched = (movie:MovieType) => {
    dispatch({ type: DISPATCH_TYPE.addToWatched, payload: movie });
  }
  const moveToWatchlist = (movie:MovieType) => {
    dispatch({ type: DISPATCH_TYPE.moveToWatchlist, payload: movie });
  }
  const removeFromWatched = (id:string) => {
    dispatch({ type: DISPATCH_TYPE.removeFromWatched, payload: id });
  }

  return (
    <GlobalContext.Provider
      value ={{
        watchlist: state.watchlist,
        watched: state.watched,
        addToWatchlist,
        removeFromWatchlist,
        addToWatched,
        moveToWatchlist,
        removeFromWatched
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}