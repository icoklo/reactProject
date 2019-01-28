import React, { Component } from 'react';

class UpdateBookmarks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            url: '',
            description: '',
            sort_order: ''
        };

        this.fetchBookmark();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchBookmark() {
        var url = process.env.REACT_APP_API_URL + '/bookmarks/edit/' + this.props.match.params.id;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    name: json.name,
                    url: json.url,
                    description: json.description,
                    sort_order: json.sort_order
                })
            })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        var url = process.env.REACT_APP_API_URL + '/bookmarks/edit/' + this.props.match.params.id;;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then( () => {
                this.props.history.push('/bookmarks/show');
            })
            .catch(error => console.error('Error:', error));
    }

    render() {

        return (
            <div className="UpdateBookmarks">
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

export default UpdateBookmarks;