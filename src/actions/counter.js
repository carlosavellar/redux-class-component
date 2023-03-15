export const Type = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  INCREMENT_BY_FIVE: 'INCREMENT_BY_FIVE',
  TOGGLE_COUNTER: 'TOGGLE_COUNTER',
};

export const increment = () => {
  return {
    type: Type.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: Type.DECREMENT,
  };
};

export const toggleCounter = () => {
  return {
    type: Type.TOGGLE_COUNTER,
  };
};

export const incrementByFive = (value) => {
  return { type: Type.INCREMENT_BY_FIVE, val: value };
};
