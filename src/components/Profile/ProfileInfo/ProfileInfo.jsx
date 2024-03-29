import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import c from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../asserts/images/ava1.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files && e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    })
  };

  return (
    <div>
        <div className={c.discriptionBlock}>
          <img src={profile.photos.large || userPhoto} className={c.mainPhoto} />
          { isOwner && <input type={"file"} onChange={onMainPhotoSelected} /> }

          { editMode
              ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
              : <ProfileData goToEditMode={ () => {setEditMode(true)} } profile={profile} isOwner={isOwner} /> }

          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    </div>
  );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
      { isOwner && <div>
        <button onClick={goToEditMode}>edit</button>
      </div> }
      <div>
        <b> Full name: </b> {profile.fullName}
      </div>
      <div>
        Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob &&
      <div>
        My profesional skills: {profile.lookingForAJobDescription}
      </div>
      }
      <div>
        About me: {profile.aboutMe}
      </div>
      <div>
        Contacts: {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key] } />
        }) }
      </div>
  </div>
}



const Contact = ({contactTitle, contactValue}) => {
  return <div className={c.contact}> <b>{contactTitle}</b>: {contactValue} </div>
}

export default ProfileInfo;
