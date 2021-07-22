import styles from './CreatePostModal.module.css';
import {useDispatch} from "react-redux";
import {useState} from "react";
import {createPostThunk} from "../../redux/reducers/posts-reducer";
import {setIsOpenModal} from "../../redux/action-creators";
import {Button} from "react-bootstrap";

export const CreatePostModal = ({userId}) => {

    const [values, setValues] = useState({});
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setIsOpenModal(false));
    };

    const onChange = (e) => {
        const {name, value} = e.target;
        setValues(prevState => ({...prevState, [name]: value}));
    }

    const createNewPost = () => {
        dispatch(createPostThunk({...values, userId: +userId}))
    }

    return (
        <div className={ styles.background }>
            <div className={ styles.container }>
                <div className={ styles.title }>
                    <h1>Create post:</h1>
                </div>
                <div className={ styles.body }>
                    <div>
                        <label>
                            <span>Title: </span>
                            <input type="text" onChange={ onChange } name={ `title` }/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <div>Body:</div>
                            <textarea onChange={ onChange } name={ `body` }/>
                        </label>
                    </div>
                </div>
                <div className={ styles.footer }>
                    <Button variant={ 'info' } onClick={ () => createNewPost() }>Save</Button>
                    <Button variant={ 'danger' } onClick={ () => closeModal() }>Cancel</Button>
                </div>
            </div>
        </div>
    );
}

