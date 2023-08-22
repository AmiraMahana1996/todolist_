import * as TYPES from "../types/todo";

export default (state = [], action: any) => {
  switch (action.type) {
    case TYPES.GET_TODOS:
      return action.payload;
    case TYPES.UPDATE_TODO:
      return action.payload;
    case TYPES.ADD_TODO:
      return action.payload;
    case TYPES.DELETE_TODO:
      return action.payload;
    default:
      return state;
  }
};
