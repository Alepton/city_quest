import React from "react";
import c from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogItem}>
        <div className={c.dialog}>Andrey</div>
        <div className={c.dialog}>Natasha</div>
        <div className={c.dialog}>Egor</div>
        <div className={c.dialog}>Dasha</div>
        <div className={c.dialog}>Nina</div>
        <div className={c.dialog}>Igor</div>
      </div>
      <div className={c.messages}>
        <div className={c.message}>Hi</div>
        <div className={c.message}>How is your name?</div>
        <div className={c.message}>My name is Pavel</div>
      </div>
    </div>
  );
};

export default Dialogs;
