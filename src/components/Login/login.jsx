import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormControls";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field  placeholder={"Login"}
                name={"login"}
                component={Input}
                validate={[requiredField]} />
      </div>
      <div>
        <Field placeholder={"Password"}
               name={"password"}
               component={Input}
               validate={[requiredField]} />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form (уникальное имя для формы)
  form: "ligin",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
