import {axiosInstance} from "./axios-config";

const getUserPosts = async (userId) => {
    const {data} = await axiosInstance.get(`/posts?userId=${ userId }`);
    return data;
};


const createNewPost = async (body) => {
    const {data} = await axiosInstance.post(`/posts`, {...body});
    return data;
};


const deletePostById = async (postId) => {
    await axiosInstance.delete(`/posts/${ postId }`);
    return `Post ${ postId } deleted`;
};


const getPostById = async (postId) => {
    const {data} = await axiosInstance.get(`/posts/${ postId }`);
    return data;
};


export {
    getUserPosts,
    createNewPost,
    getPostById,
    deletePostById
}