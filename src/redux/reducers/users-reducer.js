//Action types
import {getUsers} from "../../services";

const SET_USERS = "SET_USERS";

//Action creators

export const setUsers = (payload) => ({type: SET_USERS, payload});

//Thunk

export const setUsersThunk = () => async (dispatch) => {
    const users = await getUsers();
    dispatch(setUsers(users));
}

const initialState = {
    users: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.payload}
        }
        default:
            return state;
    }
};

