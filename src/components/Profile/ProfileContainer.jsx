import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import c from "./Profile.module.css";
import { getUsersProfile } from "../../redux/profile-reducer";
import { Redirect, withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUsersProfile(userId);
  }

  render() {

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

/* было
let WithUrlDataConteinerComponent = withRouter (AuthRedirectComponent);

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default connect (mapStateToProps, {getUsersProfile}) (WithUrlDataConteinerComponent);
*/

//стало
export default compose(
  connect (mapStateToProps, {getUsersProfile}),
  withRouter,
  //withAuthRedirect
)(ProfileContainer);
