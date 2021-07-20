import {axiosInstance} from "./axios-config";

export const getUsers = async () => {
    const {data} = await axiosInstance.get(`/users`);
    return data;
};