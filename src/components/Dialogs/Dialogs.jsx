import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Messages from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElement = props.state.messages.map((m) => (
    <Messages message={m.message} />
  ));

  let newPostEl = React.createRef();
  let addMessage = () => {
    let text = newPostEl.current.value;
    alert(text);
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogItem}>{dialogsElement}</div>
      <div className={c.messages}>{messagesElement}</div>

      <div>
        <textarea ref={newPostEl}></textarea>
      </div>

      <div>
        <button onClick={addMessage}>Add Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
