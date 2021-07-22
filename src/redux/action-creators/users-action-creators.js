import {SET_USER_ID, SET_USERS} from "../action-types";

export const setUsers = (payload) => ({type: SET_USERS, payload});
export const setUserId = (payload) => ({type: SET_USER_ID, payload});