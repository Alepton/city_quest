import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";

const Profile = () => {
  return (
  <div>
    <div>
      <img src="https://snova-prazdnik.ru/wp-content/uploads/2015/03/kvest_real_01-1440x564_c.jpg"></img>
    </div>

    <div>
      <MyPosts />
    </div>
  </div>
  )
};

export default Profile;
