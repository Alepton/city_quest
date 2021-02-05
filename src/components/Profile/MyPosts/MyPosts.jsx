import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
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
        <Post massage='Hi, how are you?' likesCount='0' />
        <Post massage="It's my first post" likesCount='23' />
      </div>
    </div>
  );
};

export default MyPosts;
