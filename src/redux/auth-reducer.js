import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"; //установить пользовательские данные



//Начальные данные после загрузки
let initialState = {
  Userid: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,

      };
/*
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
*/
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA, payload: {userId, email, login, isAuth}
});

export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data;
      dispatch (setAuthUserData(id, email, login, true));
    }
  });
}

//создаем thunk для логинизации на сервере из приложения. Задача этой санки логиниться
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch (getAuthUserData())
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
      dispatch(stopSubmit("login", {_error: message}));
    }
  });
}

//создаем thunk для вылогинизации
export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch (setAuthUserData(null, null, null, false));
    }
  });
}

export default authReducer;
