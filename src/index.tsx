import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Index from "./pages/Index";
import Accounting from "./pages/Accounting/Accounting";
import Algorithms from "./pages/Algorithms";

const App = () => (
    <Router>
        <div>
            <Link to="/">Home</Link>
            <Link to="/accounting">Accounting</Link>
            <Link to="/algorithms">Algorithms</Link>
        </div>
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/accounting" component={Accounting}/>
            <Route path="/algorithms" component={Algorithms}/>
        </Switch>
    </Router>
)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
