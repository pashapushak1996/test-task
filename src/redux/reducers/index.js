import {combineReducers} from "redux";
import {usersReducer} from "./users-reducer";
import {postsReducer} from "./posts-reducer";
import {appReducer} from "./app-reducer";
import {commentsReducer} from "./comments-reducer";

export const rootReducer = combineReducers({usersReducer, postsReducer, appReducer, commentsReducer});