import {getPostComments} from "../../services";
import {setComments, setIsLoading} from "../action-creators";
import {SET_COMMENTS} from "../action-types";


const initialState = {
    comments: null
};


const getPostCommentsThunk = (postId) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const comments = await getPostComments(postId);
        if (comments.length > 0) {
            dispatch(setComments(comments));
        }
    } catch (e) {

    } finally {
        dispatch(setIsLoading(false));
    }
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS: {
            return {...state, comments: action.payload};
        }
        default:
            return state;
    }
};


export {
    commentsReducer,
    getPostCommentsThunk,
    setComments
}