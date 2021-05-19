import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import c from "./Profile.module.css";
import { getUsersProfile } from "../../redux/profile-reducer";
import { Redirect, withRouter } from "react-router";


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUsersProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={"/login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUrlDataConteinerComponent = withRouter (ProfileContainer);

export default connect (mapStateToProps, {getUsersProfile}) (WithUrlDataConteinerComponent);
