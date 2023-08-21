import * as TYPES from "../types/todo";

export default (state = [], action: any) => {
  switch (action.type) {
    case TYPES.GET_TODOS:
      console.log(action.payload, "action.payload");
      return [...state, ...action.payload];
    default:
      return state;
  }
};
