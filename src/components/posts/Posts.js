import {useParams, useRouteMatch} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserPostsThunk} from "../../redux/reducers/post-reducer";
import {Post} from "../post";


export const Posts = () => {
    const dispatch = useDispatch();
    const {userId} = useParams();
    const {url} = useRouteMatch();

    const {postsReducer: {userPosts}, loadingReducer: {isLoading}} = useSelector((state) => state);

    useEffect(() => {
        dispatch(getUserPostsThunk(userId));
    }, [userId]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            { userPosts.map((post) => <Post url={ url } key={ post.id } post={ post }/>) }
        </div>
    );
}


