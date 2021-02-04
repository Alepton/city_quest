import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={c.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Messages = (props) => {
  return <div className={c.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogItem}>
        <DialogItem name="Andrey" id="1" />
        <DialogItem name="Natasha" id="2" />
        <DialogItem name="Egor" id="3" />
        <DialogItem name="Dasha" id="4" />
        <DialogItem name="Nina" id="5" />
        <DialogItem name="Igor" id="6" />
      </div>
      <div className={c.messages}>
        <Messages message="Hi" />
        <Messages message="How is your name?" />
        <Messages message="My name is Pavel" />
      </div>
    </div>
  );
};

export default Dialogs;
