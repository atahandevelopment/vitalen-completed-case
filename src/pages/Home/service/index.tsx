import api from "../../../instance";


export const GetPopularMovies = async () => {
    return await api.get('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
};

export const GetPopularTvSeries = async () => {
    return await api.get('/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
}

export const GetTopRatedSeries = async () => {
    return await api.get('tv/top_rated?language=en-US&page=1')
}

export const GetTopRatedMovies = async () => {
    return await api.get('movie/top_rated?language=en-US&page=1')
}