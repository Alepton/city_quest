import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Messages from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator, updateNewPostTextActionCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElement = state.messages.map((m) => (
    <Messages message={m.message} />
  ));
  let newMessagesBody = state.newMessagesBody;



  let onSendMessageClick = () => {
      props.sendMessage();
  }

  let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
  }

  return (
    <div className={c.dialogs}>
      <div className={c.dialogItem}>{dialogsElement}</div>
      <div className={c.messages}>
          <div>{messagesElement}</div>
          <div>
            <div><textarea value={newMessagesBody}
                           onChange={onNewMessageChange}
                           placeholder='Enter yoyr message'></textarea> </div>
            <div><button onClick={ onSendMessageClick }>Send</button></div>
          </div>
      </div>
    </div>
  );
};

export default Dialogs;
