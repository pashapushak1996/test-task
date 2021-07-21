import {useParams, useRouteMatch} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserPostsThunk} from "../../redux/reducers/posts-reducer";
import {Post} from "../post";
import {CreatePostModal} from "../create-post-modal/";


export const Posts = () => {


    const dispatch = useDispatch();
    const {userId} = useParams();
    const {url} = useRouteMatch();


    const {
        postsReducer: {userPosts},
        appReducer: {isLoading, isOpenModal}
    } = useSelector((state) => state);


    useEffect(() => {
        if (userPosts.length === 0) {
            dispatch(getUserPostsThunk(userId));
        }
    }, [userId]);


    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            { isOpenModal && <CreatePostModal userId={ userId }/> }
            { userPosts.map((post) => <Post key={ post.id }
                                            url={ url }
                                            post={ post }/>) }
        </div>
    );
}


