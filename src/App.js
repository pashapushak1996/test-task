import './App.css';
import {Users} from "./components/";
import {Link, Route, Switch} from "react-router-dom";
import {Posts} from "./components";
import {PostDetails} from "./components/";

function App() {

    return (
        <div>
            <Link to={ `/users` }>Users</Link>
            <Switch>
                <Route path={ `/posts/:postId` } render={ (props) => <PostDetails { ...props }/> }/>
                <Route path={ `/users/:userId/posts` } render={ (props) => <Posts { ...props }/> }/>
                <Route exact path={ `/users` } render={ (props) => <Users { ...props }/> }/>
            </Switch>
        </div>
    );
}

export default App;
