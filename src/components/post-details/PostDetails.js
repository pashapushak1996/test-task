//Create the page: Posts. Show table of posts by each user with button “Details” that
// redirects to the new page. Add the button “Add new” for creating new post using popup /
// new page.
import {useParams, useHistory} from "react-router-dom";
import {useEffect} from "react";
import {deletePostThunk, getPostByIdThunk} from "../../redux/reducers/posts-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getPostCommentsThunk, setComments} from "../../redux/reducers/comments-reducer";
import {EditPostForm} from "../edit-post-form";
import {setIsOpenEditForm} from "../../redux/action-creators";


export const PostDetails = () => {

    const dispatch = useDispatch();
    const {postId} = useParams();
    const history = useHistory();

    const {
        postsReducer: {post},
        appReducer: {isLoading, isOpenEditForm},
        commentsReducer: {comments}
    } = useSelector((state) => state);

    const deletePost = (postId) => {
        dispatch(deletePostThunk(postId));
        history.goBack();
    }

    const openForm = () => {
        dispatch(setIsOpenEditForm(true));
    }

    useEffect(() => {
        dispatch(getPostByIdThunk(postId));
        +postId <= 100 ?
            dispatch(getPostCommentsThunk(postId)) : dispatch(setComments(null));
    }, [postId, dispatch]);

    if (isLoading) {
        return <div>Loading</div>
    }

    if (isOpenEditForm) {
        return <EditPostForm post={ post }/>
    }

    return (
        <div>
            <b>{ post.title }: </b>
            <span>{ post.body }</span>
            <button onClick={ () => openForm() }>Edit</button>
            <button onClick={ () => deletePost(postId) }>Delete</button>
            {
                comments && <>
                    <h3>Comments: </h3>
                    { comments.map((comment) => <div key={ comment.id }>{ comment.id }</div>) }
                </>
            }
        </div>
    );

}


