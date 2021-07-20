import {axiosInstance} from "./axios-config";

export const getUserPosts = async (userId) => {
    const {data} = await axiosInstance.get(`/posts?userId=${ userId }`);
    return data;
};

export const getPosts = async () => {
    const {data} = await axiosInstance.get(`/posts `);
    return data;
}

export const createNewPost = async (postdata) => {
    const {data} = await axiosInstance.post(`/posts`, {
        body: JSON.stringify(postdata)
    });
    return data;
}