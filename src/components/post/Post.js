import {Link} from "react-router-dom";

export const Post = ({post}) => {
    return (
        <div>
            <b>{ post.id }</b>
            <span>{ post.title }</span>
            <Link to={ `/posts/${ post.id }` }>
                Details
            </Link>
        </div>
    );
}


