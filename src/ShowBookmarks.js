import React, { Component } from 'react';
import Constant from './constants.js'

class ShowBookmarks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch(Constant.apiURL + '/bookmarks/all')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json
                })
            })
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
                                    <td> Uredi </td>
                                    <td> Obrisi </td>
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