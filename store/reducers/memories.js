import { ADD_MEMORY } from "../actions/memories";

const initialState = {
  memories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMORY:
      return state;
    default:
      return state;
  }
};
