import * as TYPES from "../types/todo";

export default (state = [], action: any) => {
  switch (action.type) {
    case TYPES.GET_TODOS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
