import {axiosInstance} from "./axios-config";

const getPostComments = async (postId) => {
    const {data} = await axiosInstance.get(`/comments?postId=${ postId }`);
    return data;
};


export {
    getPostComments
}