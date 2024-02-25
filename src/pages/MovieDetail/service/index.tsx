import api from "../../../instance";

export const GetDetailMovie= async (id: string | undefined) => {
    return await api.get(`/movie/${id}?language=en-US`);
}

export const GetPersons = async (id: string | undefined) => {
    return await api.get(`/movie/${id}/credits?language=en-US`);
}