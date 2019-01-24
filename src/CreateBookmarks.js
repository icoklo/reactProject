import React, { Component } from 'react';
import Constant from './constants.js'

class CreateBookmarks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            url: '',
            description: '',
            sort_order: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        var url = Constant.apiURL + '/bookmarks/store';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div className="CreateBookmarks">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Naziv:
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" required class="form-control" />
                        </label>
                    </div>
                    <div>
                        <label>
                            URL:
                        <input type="text" name="url" value={this.state.url} onChange={this.handleChange} class="form-control" required />
                        </label>
                    </div>
                    <div>
                        <label>
                            Opis:
                            <textarea name="description" value={this.state.description} onChange={this.handleChange} class="form-control">
                            </textarea>
                        </label>
                    </div>
                    <div>
                        <label>
                            Poredak:
                            <input type="number" name="sort_order" value={this.state.sort_order} onChange={this.handleChange} min="1" class="form-control" required />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }

}

export default CreateBookmarks;