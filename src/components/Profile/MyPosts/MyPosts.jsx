import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostEl = React.createRef();

 let addPost = () => {
    let text = newPostEl.current.value;
    props.addPost(text);
    newPostEl.current.value = '';
  };

  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostEl}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={c.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
