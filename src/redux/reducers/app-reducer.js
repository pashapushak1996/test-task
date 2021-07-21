import {SET_IS_LOADING, SET_IS_OPEN_MODAL} from "../action-types/app-action-types";


const initialState = {
    isLoading: false,
    isOpenModal: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING: {
            return {...state, isLoading: action.payload}
        }
        case SET_IS_OPEN_MODAL: {
            return {...state, isOpenModal: action.payload}
        }
        default:
            return state;
    }
};