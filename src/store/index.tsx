/* eslint-disable react-refresh/only-export-components */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieDataSliceReducer from "./homeMovies";

const rootReducer = combineReducers({
    movies: movieDataSliceReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export type AppStore = ReturnType<typeof rootReducer>

export default store;