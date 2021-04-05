import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Messages from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
  updateNewPostTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StorContext";

const DialogsContainer = () => {
  return <StoreContext.Consumer>
      { (store) => {

        let state = store.getState();

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };

        return <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}/>
      }
      };
    </StoreContext.Consumer>
};

export default DialogsContainer;
