import {useHistory} from "react-router-dom";

export const User = ({user, url}) => {

    const history = useHistory();

    return (
        <div>
            <div>
                <span>{ user.name } - </span>
                <button onClick={ () => history.push(`${ url }/${ user.id }/posts/`) }>Posts</button>
            </div>
        </div>
    );
}


