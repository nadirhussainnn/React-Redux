
const initialState = {
  number: 0,
};

export const number_reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "INCREASE_NUMBER":
      return {
        number: state.number + 1,
      };
    case "DECREASE_NUMBER":
      return {
        number: state.number - 1,
      };

    default:
      return state;
  }
};
