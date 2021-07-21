import {axiosInstance} from "./axios-config";

const getPostComments = async (postId) => {
    const {data} = await axiosInstance.get(`/posts/${ postId }/comments`);
    return data;
};


export {
    getPostComments
}