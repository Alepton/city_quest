const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
  ],
  newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 5, message: body});
      return state;

    default:
      return state;
  }

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;
