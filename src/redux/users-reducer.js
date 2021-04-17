const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [  ]
};

const usersReducer = (state = initialState, action) => {
  //выбор свич если (case = FOLLOW) то меняем копию стейта так то
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        //users: [...state.users], т.к нужно поменять один элемент массива, то лучше использовать запись см. ниже
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }
    default:
      return state;
  }
};

//чистые функции экшенов:
export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;
