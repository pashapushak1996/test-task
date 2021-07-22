import {useState} from "react";
import styles from './UpdatePost.module.css';
import {updatePostThunk} from "../../redux/reducers/posts-reducer";
import {useDispatch} from "react-redux";
import {Button} from "react-bootstrap";
import {setIsOpenEditForm, setUserId} from "../../redux/action-creators";

export const UpdatePost = ({post}) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({});

    const onChange = (e) => {
        const {name, value} = e.target;
        setValues(prevState => ({...prevState, [name]: value}));
    }


    const closeEditPost = () => {
        dispatch(setIsOpenEditForm(false));
    }

    const updatePost = () => {
        dispatch(setUserId(post.userId))
        const editedPost = {...post, ...values};
        dispatch(updatePostThunk(post.id, editedPost));
        setValues(null);
    }

    return (
        <div className={ styles.container }>
            <h5>Edit post:</h5>
            <div className={ styles.item }>
                <label>Title:</label>
                <input type="text"
                       onChange={ onChange }
                       defaultValue={ post.title }
                       name={ 'title' }/>
            </div>
            <div className={ styles.item }>
                <label>Body:</label>
                <textarea
                    onChange={ onChange }
                    defaultValue={ post.body }
                    name={ 'body' }/>
            </div>
            <div className={ styles.buttons }>
                <Button
                    onClick={ () => updatePost() }
                    variant={ 'success' }>Save</Button>
                <Button
                    onClick={ () => closeEditPost() }
                    variant={ 'danger' }>Cancel</Button>
            </div>
        </div>
    );
}


