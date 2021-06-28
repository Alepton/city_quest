import React from "react";
import { useState } from "react";
import c from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

  /*
  let stateWithSetState = useState (false);
  let edidMode = stateWithSetState [0];
  let setEdidMode = stateWithSetState [1];
  ниже записана та же сама логика, только деструктурированная
  */

  let [edidMode, setEdidMode] = useState (false);
  let [status, setStatus] = useState (props.status);

  const activateEditMode = () => {
    setEdidMode(true);
  }

  const deActivateEditMode = () => {
    setEdidMode(false);
    props.updateStatus(status);
  }

  const onStatusChahge = (e) => {
    setStatus(e.currentTarget.value);
  }

    return (
      <div>
        { !edidMode &&
          <div>
            <span onDoubleClick={activateEditMode} >{props.status || "No status"} </span>
          </div>
        }
        {edidMode &&
          <div>
            <input
                   onChange={onStatusChahge}
                   autoFocus={true}
                   onBlur={deActivateEditMode}
                   value={status}
                   />
          </div>
        }
      </div>
    )
}

export default ProfileStatusWithHooks;
