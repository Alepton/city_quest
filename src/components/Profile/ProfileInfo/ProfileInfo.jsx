import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import c from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../asserts/images/ava1.png";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
        <div>
          <img src="https://snova-prazdnik.ru/wp-content/uploads/2015/03/kvest_real_01-1440x564_c.jpg"></img>
        </div>

        <div className={c.discriptionBlock}>
          <img src={profile.photos.large || userPhoto} />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    </div>
  );
};

export default ProfileInfo;
