import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import c from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className="profileInfo">
        <div>
          <img src="https://snova-prazdnik.ru/wp-content/uploads/2015/03/kvest_real_01-1440x564_c.jpg"></img>
        </div>

        <div className={c.discriptionBlock}>
          <img src={props.profile.photos.large} />
          <ProfileStatusWithHooks status = {props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;
