import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src="https://avatarko.ru/img/kartinka/9/igra_multfilm_minion_Hitman_8973.jpg" />
      { props.message }
      <div>
        <span>like</span> { props.likesCount}
      </div>

    </div>
  );
};

export default Post;
