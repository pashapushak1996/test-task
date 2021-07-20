import {useEffect} from "react";
import {setUsersThunk} from "../../redux/reducers/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {User} from "../user";
import {useRouteMatch} from "react-router-dom";

export const Users = () => {
    const {url} = useRouteMatch();
    const dispatch = useDispatch();
    const {users} = useSelector(({usersReducer}) => usersReducer);

    useEffect(() => {
        dispatch(setUsersThunk());
    }, []);


    return (
        <>
            { users.map((user) => <User url={ url } key={ user.id } user={ user }/>) }
        </>
    );
}


