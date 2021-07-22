import {createNewPost, deletePostById, getUserPosts, updatePost} from "../../services/";
import {
    createPostAC,
    deletePostAC,
    setIsLoading,
    setIsOpenEditForm,
    setIsOpenModal,
    setPostAC,
    setPostsAC, updatePostAC
} from "../action-creators";
import {CREATE_POST, DELETE_POST, SET_POST, SET_POSTS, UPDATE_POST} from "../action-types";


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
                post: {...state.userPosts.find(el => el.id === action.payload.id)}
            };
        }
        case DELETE_POST: {
            return {...state, userPosts: state.userPosts.filter(post => post.id !== +action.payload)}
        }
        case CREATE_POST: {
            return {...state, userPosts: [...state.userPosts, action.payload]};
        }
        case UPDATE_POST: {
            return {
                ...state, userPosts: state.userPosts.reduce((acc, curr) => {
                    if (curr.id === action.payload.postId) {
                        curr = {...action.payload.updatedPost};
                    }
                    acc.push(curr);
                    return acc;
                }, []), post: {...action.payload.updatedPost}
            }
        }
        default:
            return state;
    }
};

//Thunk

const updatePostThunk = (postId, postData) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const updatedPost = await updatePost(postId, postData);
        dispatch(updatePostAC({postId, updatedPost}));
    } catch (e) {
        dispatch(updatePostAC({postId, updatedPost: postData}));
    } finally {
        dispatch(setIsLoading(false));
        dispatch(setIsOpenEditForm(false));
    }
}

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
        dispatch(setPostAC({id: +postId}));
    } catch (e) {
        console.log(e);
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
        console.log(e);
    } finally {
        dispatch(setIsLoading(false));
        dispatch(setIsOpenModal(false));
    }
}

export {
    getUserPostsThunk,
    postsReducer,
    getPostByIdThunk,
    deletePostThunk,
    createPostThunk,
    updatePostThunk
}
