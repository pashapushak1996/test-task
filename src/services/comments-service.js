import {axiosInstance} from "./axios-config";

export const getPostComments = async (postId) => {
    const {data} = await axiosInstance.get(`/comments?postId=${ postId }`);
    return data;
};


