import {SET_IS_LOADING, SET_IS_OPEN_EDIT_FORM, SET_IS_OPEN_MODAL} from "../action-types";


const initialState = {
    isLoading: false,
    isOpenModal: false,
    isOpenEditForm: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING: {
            return {...state, isLoading: action.payload}
        }
        case SET_IS_OPEN_MODAL: {
            return {...state, isOpenModal: action.payload}
        }
        case SET_IS_OPEN_EDIT_FORM: {
            return {...state, isOpenEditForm: action.payload}
        }
        default:
            return state;
    }
};