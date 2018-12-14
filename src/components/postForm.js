import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.createPost(post);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange}  className="form-control" />
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <input type="text" name="body" value={this.state.body} onChange={this.onChange}  className="form-control" />
                </div>
                <button type="submit" className="btn-btn-primary">Submit</button>
            </form>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(
    null,
    { createPost }
)(PostForm);