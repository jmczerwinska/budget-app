export default(state, action) => {
  switch(action.type) {
    case "ADD_TRANSACTION":
      return [action.payload, ...state];
    case "DELETE_TRANSACTION":
      return state.filter(transaction => transaction.id !== action.payload);
    default:
      return state;
  }
}