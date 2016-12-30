import React from 'react';
import Photo from './Photo';
// import comments

const Single = React.createClass({
  render(){
    // index of the post
    // get us the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    console.log('this is the index from single.js',i);
    const post = this.props.posts[i];
    console.log('this is the post from single.js', post);
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
      </div>
    );
  }
});

export default Single;
