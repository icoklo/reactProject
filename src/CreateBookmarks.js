import React, { Component } from 'react';
import Constant from './constants.js'

class CreateBookmarks extends Component {

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
            <div className="CreateBookmarks">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="name" name="name" required=""  class="form-control">
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}

export default CreateBookmarks;