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
    },
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 7,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
