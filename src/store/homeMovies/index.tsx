import { createSlice } from "@reduxjs/toolkit";

export const homeMoviesSlice = createSlice({
  name: "movieData",
  initialState: {
    popularMovies: [],
    popularTvSeries: [],
    randomMovie: {},
    randomTvSeries: {},
  },
  reducers: {
    getPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTvSeries: (state, action) => {
      state.popularTvSeries = action.payload;
    },
    getRandomTvSerie: (state, action) => {
      state.randomTvSeries = action.payload;
    },
    getRandomMovie: (state, action) => {
      state.randomMovie = action.payload;
    },
  },
});

export const {
  getPopularMovie,
  getTvSeries,
  getRandomTvSerie,
  getRandomMovie,
} = homeMoviesSlice.actions;

export default homeMoviesSlice.reducer;
