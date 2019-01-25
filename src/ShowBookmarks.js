import React, { Component } from 'react';
import Constant from './Constant.js'
import { Link } from "react-router-dom";

class ShowBookmarks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }

        // This binding is necessary to make `this` work in the callback
        this.deleteBookmark = this.deleteBookmark.bind(this);
    }

    componentDidMount() {
        this.getAllBookmarks();
    }

    getAllBookmarks() {
        fetch(Constant.apiURL + '/bookmarks/all')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json
                })
            })
    }

    deleteBookmark(bookmarkID) {
        alert("Brisem");

        var url = Constant.apiURL + '/bookmarks/delete/' + bookmarkID;
        fetch(url, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));

        this.getAllBookmarks();
    }

    render() {
        var { items } = this.state;

        return (
            <div className="ShowBookmarks">
                <table>
                    <thead>
                        <tr>
                            <th>Redni broj</th>
                            <th>Naziv</th>
                            <th>Opis</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => (
                                <tr>
                                    <td> {item.id} </td>
                                    <td> {item.name} </td>
                                    <td> {item.description} </td>
                                    <td>
                                        <Link to={"/bookmarks/edit/" + item.id}>Uredi</Link>
                                    </td>
                                    <td>
                                        <button onClick={this.deleteBookmark.bind(this, item.id)}>
                                            Obrisi
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShowBookmarks;