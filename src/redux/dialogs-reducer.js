const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {

    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [ ...state.messages, {id: 5, message: body} ]
      };

    default:
      return state;
  }

}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
