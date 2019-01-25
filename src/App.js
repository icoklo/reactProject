import React, { Component } from 'react';
import './App.css';
import ShowBookmarks from './ShowBookmarks';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateBookmarks from './CreateBookmarks';
import UpdateBookmarks from './UpdateBookmarks.js';

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
                                <Link to="/bookmarks/create">Kreiraj oznake</Link>
                            </li>
                        </ul>

                        <hr />

                        <Route exact path="/" />
                        <Route path="/bookmarks/show" component={ShowBookmarks} />
                        <Route path="/bookmarks/create" component={CreateBookmarks} />
                        <Route path="/bookmarks/edit/:id" component={UpdateBookmarks} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
