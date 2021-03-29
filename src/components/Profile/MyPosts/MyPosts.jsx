import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostEl = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    let text = newPostEl.current.value;
    let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    props.dispatch(action);
  };

  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostEl}
            value={props.newPostText}
          />
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
