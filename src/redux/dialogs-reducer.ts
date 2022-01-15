const SEND_MESSAGE = "SEND-MESSAGE";

type DialogsType = {
  id: number;
  name: string;
};

type MessagesType = {
  id: number;
  message: string;
};

/*
Вариант с ручным созданием типа InitialStateType

export type InitialStateType = {
  dialogs: DialogsType[];
  messages: MessagesType[];
};

let initialState: InitialStateType = {
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
};
*/

//вариант с автоматическим созданием типа InitialStateType

let initialState = {
  dialogs: [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Natasha" },
    { id: 3, name: "Egor" },
    { id: 4, name: "Dasha" },
    { id: 5, name: "Nina" },
    { id: 5, name: "Igor" },
  ] as Array<DialogsType>,

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your name?" },
    { id: 3, message: "My name is Pavel" },
    { id: 4, message: "Yo" },
  ] as Array<MessagesType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
      };

    default:
      return state;
  }
};

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessageCreator = (
  newMessageBody: string
): SendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
