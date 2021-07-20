import {combineReducers} from "redux";
import {usersReducer} from "./users-reducer";
import {postsReducer} from "./post-reducer";
import {loadingReducer} from "./loading-reducer";

export const rootReducer = combineReducers({usersReducer, postsReducer, loadingReducer});