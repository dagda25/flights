import {ActionType} from "../../action";


const initialState = {
  data: []
};


const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA:
      return Object.assign({}, state, {
        data: action.payload,
      });
    default:
      return state;
  }
};

export {reducerApp};

