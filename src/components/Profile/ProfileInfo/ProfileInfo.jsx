import React from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className="profileInfo">
        <div>
          <img src="https://snova-prazdnik.ru/wp-content/uploads/2015/03/kvest_real_01-1440x564_c.jpg"></img>
        </div>

        <div className={c.discriptionBlock}>
          <ava>ava + </ava>
          <discription>discription</discription>
        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;
