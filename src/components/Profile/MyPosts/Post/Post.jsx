import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src="http://archilab.online/images/1/123.jpg" />
      { props.message }
      <div>
        <span>like</span> { props.likesCount}
      </div>

    </div>
  );
};

export default Post;
