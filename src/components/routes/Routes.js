import {Route, Switch} from "react-router-dom";
import {PostDetails} from "../post-details";
import {Posts} from "../posts";
import {Users} from "../users";

export const Routes = () => {
    return (
        <Switch>
            <Route path={ `/posts/:postId` }
                   render={ (props) => <PostDetails { ...props }/> }/>
            <Route path={ `/:userId/posts` }
                   render={ (props) => <Posts { ...props }/> }/>
            <Route exact patch={ `/` }
                   render={ () => <Users/> }/>
        </Switch>
    );
}


