import {useHistory, useParams} from "react-router-dom";
import {useEffect} from "react";
import {deletePostThunk, getPostByIdThunk} from "../../redux/reducers/posts-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getPostCommentsThunk, setComments} from "../../redux/reducers/comments-reducer";
import {UpdatePost} from "../update-post";
import {setIsOpenEditForm, setUserId} from "../../redux/action-creators";
import {Button, Card} from "react-bootstrap";
import styles from './PostDetails.module.css';


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
        <Card>
            <Card.Body>
                <div>
                    <Card.Title>Title: { post.title }</Card.Title>
                </div>
                <div>
                    <Card.Subtitle>Body:</Card.Subtitle>
                    <Card.Text>{ post.body }</Card.Text>
                </div>
                <div className={ styles.buttonGroup }>
                    <Button variant={ 'outline-warning' } onClick={ () => history.goBack() }>Back</Button>
                    <Button variant={ 'outline-info' } onClick={ () => openEditPost() }>Edit</Button>
                    <Button variant={ 'secondary' } onClick={ () => deletePost(postId) }>Delete</Button>
                </div>
                <div>
                    {
                        comments && <>
                            <h3>Comments: </h3>
                            { comments.map((comment) => <div key={ comment.id }>{ comment.name }</div>) }
                        </>
                    }
                </div>
            </Card.Body>
        </Card>
    );

}


