import {useEffect} from "react";
import {setUsersThunk} from "../../redux/reducers/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {User} from "../user";

export const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(({usersReducer}) => usersReducer);

    useEffect(() => {
        dispatch(setUsersThunk());
    }, []);

    return (
        <>
            { users.map((user) => <User key={ user.id } user={ user }/>) }
        </>
    );
}


