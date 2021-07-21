//Action types
import {createNewPost, deletePostById, getPostById, getUserPosts} from "../../services/posts-service";
import {setIsLoading, setIsOpenModal} from "../action-creators";

const SET_POSTS = "SET_POSTS";
const SET_POST = "SET_POST";
const DELETE_POST = "DELETE_POST";
const CREATE_POST = "CREATE_POST";


//Action creators

const setPostsAC = (payload) => ({type: SET_POSTS, payload});
const setPostAC = (payload) => ({type: SET_POST, payload});
const deletePostAC = (payload) => ({type: DELETE_POST, payload});
const createPostAC = (payload) => ({type: CREATE_POST, payload});


//Posts thunk

//Get

const getUserPostsThunk = (userId) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const userPosts = await getUserPosts(userId);
        dispatch(setPostsAC(userPosts));
    } catch (e) {
        console.log(e);
    } finally {
        dispatch(setIsLoading(false));
    }
};

const getPostByIdThunk = (postId) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        if (+postId <= 100) {
            const newPost = await getPostById(postId);
            dispatch(setPostAC({
                newPost: newPost,
            }));
        } else {
            dispatch(setPostAC({
                id: +postId
            }));
        }

    } catch (e) {

    } finally {
        dispatch(setIsLoading(false));
    }
};


const deletePostThunk = (postId) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const result = await deletePostById(postId);
        dispatch(deletePostAC(postId));
        alert(result);
    } catch (e) {
        console.log(e);
    } finally {
        dispatch(setIsLoading(false));
    }
}


const createPostThunk = (postData) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const data = await createNewPost(postData);
        if (data.id === 101) {
            data.id = Date.now();
        }
        dispatch(createPostAC(data));
    } catch (e) {

    } finally {
        dispatch(setIsLoading(false));
        dispatch(setIsOpenModal(false));
    }
}

const initialState = {
    userPosts: [],
    post: []
};


const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_POSTS: {
            return {...state, userPosts: action.payload};
        }
        case SET_POST: {
            return {
                ...state,
                post: action.payload.newPost ? action.payload.newPost : {...state.userPosts.find(el => el.id === action.payload.id)}
            };
        }
        case DELETE_POST: {
            return {...state, userPosts: state.userPosts.filter(post => post.id !== +action.payload)}
        }
        case CREATE_POST: {
            return {...state, userPosts: [...state.userPosts, action.payload]};
        }
        default:
            return state;
    }
};


export {
    getUserPostsThunk,
    postsReducer,
    getPostByIdThunk,
    deletePostThunk,
    createPostThunk
}
