import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";


class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUsersProfile(userId);
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile();
  };

  componentDidUpdate(prevProps, prevState, snapshot ) {
    if (this.props.match.params.userId != this.props.match.params.userId) {
      this.refreshProfile();
    }
  };


  render() {

    return <Profile {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto} />;
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

/* было
let WithUrlDataConteinerComponent = withRouter (AuthRedirectComponent);

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default connect (mapStateToProps, {getUsersProfile}) (WithUrlDataConteinerComponent);
*/

//стало
export default compose(
  connect (mapStateToProps, {getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  //withAuthRedirect
)(ProfileContainer);
