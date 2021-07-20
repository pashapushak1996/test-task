//Action types
import {getUserPosts} from "../../services/posts-service";
import {setIsLoading} from "./loading-reducer";

const SET_POSTS = "SET_POSTS";


//Action creators

const setPosts = (payload) => ({type: SET_POSTS, payload});


//Posts thunk


export const getUserPostsThunk = (userId) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const userPosts = await getUserPosts(userId);
        dispatch(setPosts(userPosts));
    } catch (e) {

    } finally {
        dispatch(setIsLoading(false));
    }

};


const initialState = {
    userPosts: [],
    isFetching: false
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {...state, userPosts: action.payload};
        }
        default:
            return state;
    }
};
