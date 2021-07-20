const initialState = {isLoading: false};
const SET_IS_LOADING = "SET_IS_LOADING";

export const setIsLoading = (payload) => ({
    type: SET_IS_LOADING, payload
});

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING: {
            return {...state, isLoading: action.payload}
        }
        default:
            return state;
    }
}