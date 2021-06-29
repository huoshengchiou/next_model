export const counterReducer = (state = "from test", action) => {
  switch (action.type) {
    case "INCREMENT":
      return "change";
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
