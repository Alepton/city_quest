import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <div>
        <MyPosts posts={props.state.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
      </div>
    </div>
  );
};

export default Profile;
