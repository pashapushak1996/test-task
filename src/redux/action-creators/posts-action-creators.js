import {CREATE_POST, DELETE_POST, SET_POST, SET_POSTS, UPDATE_POST} from "../action-types";

export const setPostsAC = (payload) => ({type: SET_POSTS, payload});
export const setPostAC = (payload) => ({type: SET_POST, payload});
export const deletePostAC = (payload) => ({type: DELETE_POST, payload});
export const createPostAC = (payload) => ({type: CREATE_POST, payload});
export const updatePostAC = (payload) => ({type: UPDATE_POST, payload});