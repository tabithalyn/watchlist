/* eslint-disable @typescript-eslint/no-explicit-any */
import { MovieType } from "./GlobalState";

const ACTIONS = {
  ADD_TO_WATCHLIST: "ADD_TO_WATCHLIST",
  REMOVE_FROM_WATCHLIST: "REMOVE_FROM_WATCHLIST",
  ADD_TO_WATCHED: "ADD_TO_WATCHED",
  MOVE_TO_WATCHLIST: "MOVE_TO_WATCHLIST",
  REMOVE_FROM_WATCHED: "REMOVE_FROM_WATCHED"
}

const AppReducer = (
  state: any,
  action: any
) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist]
      };
    case ACTIONS.REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie:MovieType) => movie.id !== action.payload.id
        )
      };
    case ACTIONS.ADD_TO_WATCHED:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie:MovieType) => movie.id !== action.payload.movie
        ),
        watched: [action.payload, ...state.watched]
      };
    case ACTIONS.MOVE_TO_WATCHLIST:
      return {
        ...state,
        watch: state.watched.filter(
          (movie:MovieType) => movie.id !== action.payload.movie
        ),
        watchlist: [action.payload, ...state.watchlist]
      };
    case ACTIONS.REMOVE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movie:MovieType) => movie.id !== action.payload.id
        )
      };
    default:
      return state;
  }
}

export default AppReducer;