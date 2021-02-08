import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let p = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 20}
  ]

  let postsElement = p.map (p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
        <button>Add post</button>
        <button>Remove</button>
        </div>
      </div>
      <div className={c.posts}>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
