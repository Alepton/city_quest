import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";
import { Textarea } from "../common/FormControls/FormControls";


const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Enter yoyr message"}
          name={"newMessageBody"}
          component={Textarea}
          validate={[requiredField, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm)
