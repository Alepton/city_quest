
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 20 },
        { id: 3, message: "It's my first post", likesCount: 20 },
        { id: 4, message: "It's my first post", likesCount: 20 },
        { id: 5, message: "It's my first post", likesCount: 20 },
        { id: 6, message: "It's my first post", likesCount: 20 },
      ],
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Natasha" },
        { id: 3, name: "Egor" },
        { id: 4, name: "Dasha" },
        { id: 5, name: "Nina" },
        { id: 5, name: "Igor" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your name?" },
        { id: 3, message: "My name is Pavel" },
        { id: 4, message: "Yo" },
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  },
};


export default store;
window.store = store;
