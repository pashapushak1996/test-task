import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setIsOpenModal} from "../../redux/action-creators";


export const Post = ({post}) => {

    const dispatch = useDispatch();


    return (
        <div>
            <span>{ post.title }</span>
            <Link to={ `/posts/${ post.id }` }>
                <button>Details</button>
            </Link>
            <button onClick={ () => dispatch(setIsOpenModal(true)) }>Add new</button>
        </div>
    );
}


