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

  let dialogsData = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Natasha'},
    {id: 3, name: 'Egor'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Nina'},
    {id: 5, name: 'Igor'}
  ]

  let messegesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your name?'},
    {id: 3, message: 'My name is Pavel'},
    {id: 4, message: 'Yo'}
  ]

  return (
    <div className={c.dialogs}>
      <div className={c.dialogItem}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={c.messages}>
        <Messages message={messegesData[0].message} />
        <Messages message={messegesData[1].message} />
        <Messages message={messegesData[2].message} />
        <Messages message={messegesData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
