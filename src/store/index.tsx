/* eslint-disable react-refresh/only-export-components */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieDataSliceReducer from "./homeMovies";
import loaderSliceReducer from "./loader";

const rootReducer = combineReducers({
    movies: movieDataSliceReducer,
    loader: loaderSliceReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export type AppStore = ReturnType<typeof rootReducer>

export default store;