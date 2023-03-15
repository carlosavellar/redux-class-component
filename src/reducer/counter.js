import * as actions from './../actions/counter';
const initialState = {
  counter: 0,
  isSHow: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.Type.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actions.Type.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case actions.Type.INCREMENT_BY_FIVE:
      return { ...state, counter: state.counter + action.val };
    case actions.Type.TOGGLE_COUNTER:
      return { ...state, isShoiw: !state.isShow };
    default:
      return state;
  }
};

export default counterReducer;
