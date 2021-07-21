import './App.css';
import {Routes} from "./components/";
import {Link} from "react-router-dom";

function App() {
    return (
        <div>
            <Link to={ `/users` }>Users</Link>
            <Routes/>
        </div>
    );
}

export default App;
