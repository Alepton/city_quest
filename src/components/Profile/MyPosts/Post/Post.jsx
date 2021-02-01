import React from "react";
import c from "./Post.module.css";

const Post = () => {
  return (
    <div className={c.item}>
      <img src="http://archilab.online/images/1/123.jpg" />
      post 1
      <div>
        <span>like</span>
      </div>
      <div>
        <span>dislike</span>
      </div>
    </div>
  );
};

export default Post;
