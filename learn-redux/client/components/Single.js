import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
// import comments

const Single = React.createClass({
  render(){
    // index of the post
    // get us the post
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    console.log('this is the index from single.js',i);
    const post = this.props.posts[i];
    console.log('this is the post from single.js', post);
    const postComments = this.props.comments[postId] || [];
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments= { postComments }/>
      </div>
    );
  }
});

export default Single;
