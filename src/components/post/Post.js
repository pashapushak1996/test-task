import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import styles from './Post.module.css';

export const Post = ({post}) => {

    return (
        <div className={ styles.postItem }>
            <h6>Title:</h6>
            <p>{ post.title }</p>
            <Link to={ `/posts/${ post.id }` }>
                <Button variant={ 'dark' }>Details</Button>
            </Link>
        </div>
    );
}




