import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={c.posts}>
        <Post massage='Hi, how are you?' />
        <Post massage="It's my first post"/>

      </div>
    </div>
  );
};

export default MyPosts;
