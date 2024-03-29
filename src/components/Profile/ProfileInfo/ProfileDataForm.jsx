import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormControls/FormControls";
import c from "./ProfileInfo.module.css";
import styles from "../../common/FormControls/FormControls.module.css";



const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return <form onSubmit={handleSubmit}>
  <div>
    <button>save</button>
  </div>
  {error && <div className={styles.formSummaryError}>{error}</div>}
  <div>
    <b> Full name</b>:  {createField("Full name", "fullName", Input, [])}
  </div>
  <div>
    Looking for a job: {createField("", "lookingForAJob", Input, [], {type: "checkbox"} )}
  </div>
  <div>
    My profesional skills: {createField("My profesional skills", "lookingForAJobDescription", Textarea, [] )}
  </div>
  <div>
    About me: {createField("About me", "aboutMe", Textarea, [] )}
  </div>
  <div>
    Contacts: {Object.keys(profile.contacts).map(key => {
      return <div key={key} className={c.contact}>
      <b>{key}:</b> {createField(key, "contacts." + key, Input, [])}
      </div>
    }) }
  </div>
</form>
}


const ProfileDataFormReduxForm = reduxForm ({form: 'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm
