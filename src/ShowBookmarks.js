import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';

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
        fetch(process.env.REACT_APP_API_URL + '/bookmarks/all')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json
                })
            })
    }

    deleteBookmark(bookmarkID) {
        //alert("Brisem");

        var url = process.env.REACT_APP_API_URL + '/bookmarks/delete/' + bookmarkID;
        fetch(url, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(() => {
                this.getAllBookmarks();
            })
            .catch(error => console.error('Error:', error));
    }

    render() {
        var { items } = this.state;

        return (
            <div className="ShowBookmarks">
                <Table dark>
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
                                <tr key={item.id}>
                                    <td> {item.id} </td>
                                    <td> {item.name} </td>
                                    <td> {item.description} </td>
                                    <td>
                                        <Link to={"/bookmarks/edit/" + item.id}>Uredi</Link>
                                    </td>
                                    <td>
                                        <Button onClick={this.deleteBookmark.bind(this, item.id)} color="link">
                                            Obrisi
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ShowBookmarks;
