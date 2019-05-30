import { LOGIN_DETAILS } from "../actions/types";

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_DETAILS:
    console.log(action.data.username + " " + action.data.password );
      return state;
    default:
      return state;
  }
};

export default loginReducer;