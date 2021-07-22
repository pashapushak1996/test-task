import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserPostsThunk} from "../../redux/reducers/posts-reducer";
import {Post} from "../post";
import {CreatePostModal} from "../create-post-modal/";
import {setIsOpenModal, setUserId} from "../../redux/action-creators";
import {Button} from "react-bootstrap";
import styles from './Posts.module.css';


export const Posts = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const {userId} = useParams();

    const {
        postsReducer: {userPosts},
        appReducer: {isLoading, isOpenModal},
        usersReducer: {userId: id}
    } = useSelector((state) => state);

    useEffect(() => {
        if (+userId !== id) {
            dispatch(getUserPostsThunk(userId))
        }
    }, [userId]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            { isOpenModal && <CreatePostModal userId={ userId }/> }
            { userPosts.map((post) => <Post key={ post.id }
                                            post={ post }/>) }
            <div className={ styles.buttonGroup }>
                <Button variant={ 'success' }
                        onClick={ () => {
                            dispatch(setIsOpenModal(true))
                            dispatch(setUserId(+userId));
                        } }>Add new</Button>
                <Button variant={ "danger" }
                        onClick={ () => history.goBack() }>Back</Button>
            </div>
        </div>
    );
}


