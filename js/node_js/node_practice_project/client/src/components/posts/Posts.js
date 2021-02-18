import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPosts} from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostsForm from './PostsForm';

const Post = ({getPosts, post:{posts, loading}}) => {

   useEffect(()=>{
      getPosts();
   },[getPosts]);

   return loading ? <Spinner/> : <>
      <h1 className="large text-primary">Post</h1>
      <p className="lead">
         <i className="fas fa-user"> Welcome to the community</i>
      </p>
      <PostsForm/>
      <div className="posts">
         {posts.map(post => (
            <PostItem key={post._id} post={post}/>
         ))}
      </div>
   </>;
};

Post.propTypes = {
   getPosts: PropTypes.func.isRequired,
   post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   post: state.post
});

export default connect(mapStateToProps, {getPosts})(Post);