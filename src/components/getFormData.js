import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPost } from '../actions/postActions';
import {connect} from 'react-redux';
class getformdata extends Component {
    componentWillMount() {
        this.props.getPost();
    }

    componentWillReceiveProps(newProps){
        this.props.posts.unshift(newProps.newpost);
    }

    render() {
        console.log(this.props.posts)

        const getItems = this.props.posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ));
            return (
                <div>
                    <h2>List of Data</h2>
                    {getItems}
                </div>
    
            ); 
      
    }
}
getformdata.propTypes = {
    // getformdata: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
  };

  const mapStateToProps = state =>({
      posts:state.posts.items,
      newpost:state.posts.item

  })

  

export default connect(mapStateToProps,{getPost}) (getformdata);