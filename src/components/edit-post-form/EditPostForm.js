import {useState} from "react";

export const EditPostForm = ({post}) => {
    const [values, setValues] = useState({});

    const onChange = (e) => {
        const {name, value} = e.target;
        setValues(prevState => ({...prevState, [name]: value}));
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const editedPost = {...post, ...values};
        console.log(editedPost);
    }
    return (
        <form onSubmit={ onSubmit }>
            <label>
                <span>title: </span>
                <input type="text" onChange={ onChange } defaultValue={ post.title } name={ 'title' }/>
            </label>
            <label>
                <span>body: </span>
                <textarea onChange={ onChange } defaultValue={ post.body } name={ 'body' }/>
            </label>
            <button>Save</button>
            <button>Cancel</button>
        </form>
    );
}


