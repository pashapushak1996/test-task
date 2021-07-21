import styles from './CreatePostModal.module.css';
import {useDispatch} from "react-redux";

import {useState} from "react";
import {createPostThunk} from "../../redux/reducers/posts-reducer";
import {setIsOpenModal} from "../../redux/action-creators";

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
                <div className={ styles.titleCloseBtn }>
                    <button onClick={ closeModal }> X</button>
                </div>
                <div className={ styles.title }>
                    <h1>Create post:</h1>
                </div>
                <div className={ styles.body }>
                    <div>
                        <label>
                            Title:
                            <input type="text" onChange={ onChange } name={ `title` }/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Body:
                            <input type="text" onChange={ onChange } name={ `body` }/>
                        </label>
                    </div>
                </div>
                <div className={ styles.footer }>
                    <button onClick={ () => createNewPost() }>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    );
}


