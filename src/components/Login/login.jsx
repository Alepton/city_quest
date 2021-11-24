import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { requiredField } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormControls/FormControls";
import styles from "../common/FormControls/FormControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", Input, [requiredField])}
      {createField("Password", "password", Input, [requiredField], {
        type: "password",
      })}
      {createField(null, "rememberMe", Input, null, { type: "checkbox" },
        "remember me"
      )}

      {captchaUrl && <img src={captchaUrl}/>}
      {captchaUrl && createField("Symbols from image", "captcha", Input, [requiredField], {} )}

      {error && <div className={styles.formSummaryError}>{error}</div>}

      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form (уникальное имя для формы)
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
