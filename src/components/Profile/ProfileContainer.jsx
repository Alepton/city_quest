import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import c from "./Profile.module.css";
import { setUsersProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    .then(response => {
      this.props.setUsersProfile(response.data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataConteinerComponent = withRouter (ProfileContainer);

export default connect (mapStateToProps, {setUsersProfile }) (WithUrlDataConteinerComponent);
