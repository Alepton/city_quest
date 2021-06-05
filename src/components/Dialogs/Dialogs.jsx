import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Messages from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
  updateNewPostTextActionCreator,
} from "../../redux/dialogs-reducer";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormControls/FormControls";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElement = state.messages.map((m) => (
    <Messages message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={c.dialogs}>
      <div className={c.dialogItem}>{dialogsElement}</div>
      <div className={c.messages}>
        <div>{messagesElement}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
