import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  userPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

type RootRedusertype = typeof rootReducer; //(globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootRedusertype>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// @ts-ignore
window.__store__ = store;

export default store;
