import {SET_IS_OPEN_EDIT_FORM} from "../action-types";

const {SET_IS_OPEN_MODAL} = require("../action-types/app-action-types");
const {SET_IS_LOADING} = require("../action-types/app-action-types");

export const setIsLoading = (payload) => ({
    type: SET_IS_LOADING, payload
});

export const setIsOpenModal = (payload) => ({
    type: SET_IS_OPEN_MODAL, payload
});

export const setIsOpenEditForm = (payload) => ({
    type: SET_IS_OPEN_EDIT_FORM, payload
});