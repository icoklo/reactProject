import React, { Component } from 'react';
import './App.css';
import ShowBookmarks from './ShowBookmarks';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Pocetna</Link>
                            </li>
                            <li>
                                <Link to="/bookmarks/show">Prikazi oznake</Link>
                            </li>
                            <li>
                                <Link to="/topics">Topics</Link>
                            </li>
                        </ul>

                        <hr />

                        <Route exact path="/" />
                        <Route path="/bookmarks/show" component={ShowBookmarks} />
                        <Route path="/bookmarks/create" />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
