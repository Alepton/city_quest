import React from "react";
import c from "./../Dialogs.module.css";


const Messages = (props) => {
    return <div className={c.message}>{props.message}</div>;
};

export default Messages;
