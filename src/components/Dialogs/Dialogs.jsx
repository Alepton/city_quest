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

  let dialogs = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Natasha'},
    {id: 3, name: 'Egor'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Nina'},
    {id: 5, name: 'Igor'}
  ]

  let messeges = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your name?'},
    {id: 3, message: 'My name is Pavel'},
    {id: 4, message: 'Yo'}
  ]

  let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElement = messeges.map(m => <Messages message={m.message} />);

  return (
    <div className={c.dialogs}>
      <div className={c.dialogItem}>
        {dialogsElement}
      </div>
      <div className={c.messages}>
        {messagesElement}
      </div>
    </div>
  );
};

export default Dialogs;
