//Action types
import {getUsers} from "../../services";
import {setUsers} from "../action-creators";
import {SET_USER_ID, SET_USERS} from "../action-types";

export const setUsersThunk = () => async (dispatch) => {
    const users = await getUsers();
    dispatch(setUsers(users));
}

const initialState = {
    users: [],
    userId: null
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.payload}
        }
        case SET_USER_ID: {
            return {...state, userId: action.payload};
        }
        default:
            return state;
    }
};

