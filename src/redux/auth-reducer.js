import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"; //установить пользовательские данные
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

//Начальные данные после загрузки
let initialState = {
  Userid: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null //if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

//action creator для captcha:
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

//переписываем код на более применяемый. вместо .then применяем await
/*export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data;
      dispatch (setAuthUserData(id, email, login, true));
    }
  });

}
*/

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

//создаем thunk для логинизации на сервере из приложения. Задача этой санки логиниться
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if(response.data.resultCode === 10)  {
      dispatch(getCaptchaUrl());
    }
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

//thank для captcha
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url

  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

//создаем thunk для вылогинизации
export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};



export default authReducer;
