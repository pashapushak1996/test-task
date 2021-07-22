import {useHistory, useParams} from "react-router-dom";
import {useEffect} from "react";
import {deletePostThunk, getPostByIdThunk} from "../../redux/reducers/posts-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getPostCommentsThunk, setComments} from "../../redux/reducers/comments-reducer";
import {UpdatePost} from "../update-post";
import {setIsOpenEditForm, setUserId} from "../../redux/action-creators";
import {Button} from "react-bootstrap";


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
        dispatch(setUserId(post.userId));
        dispatch(deletePostThunk(postId));
        history.goBack();
    }


    const openEditPost = () => {
        dispatch(setIsOpenEditForm(true));
    }

    useEffect(() => {
        dispatch(getPostByIdThunk(postId));
        if (+postId <= 100) {
            dispatch(getPostCommentsThunk(postId));
        } else {
            dispatch(setComments(null));
        }
    }, [postId]);


    if (isLoading) {
        return <div>Loading</div>
    }


    if (isOpenEditForm) {
        return <UpdatePost post={ post }/>
    }

    return (
        <div>
            <div>
                <h5>Title:</h5>
                <span>{ post.title }</span>
            </div>
            <div>
                <h5>Body:</h5>
                <span>{ post.body }</span>
            </div>
            <div>
                <Button variant={ 'outline-warning' } onClick={ () => history.goBack() }>Back</Button>
                <Button variant={ 'outline-info' } onClick={ () => openEditPost() }>Edit</Button>
                <Button variant={ 'secondary' } onClick={ () => deletePost(postId) }>Delete</Button>
            </div>
            {
                comments && <>
                    <h3>Comments: </h3>
                    { comments.map((comment) => <div key={ comment.id }>{ comment.name }</div>) }
                </>
            }

        </div>
    );

}


