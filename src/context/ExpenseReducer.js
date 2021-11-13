export default (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "EXTRACT_ITEM":
      return {
        ...state,
        foundobj: state.expenses.find((item) => {
          return item.id === action.payload;
        }),
      };
    case "REPLACE_WITH":
      state.expenses.forEach((element) => {
        if (element.id === action.payload.id) {
          element.description = action.payload.description;
          element.amount = action.payload.amount;
          element.date = action.payload.date;
          element.note = action.payload.note;
        }
      });
      return state;
    case "CHANGE_TYPE":
      return {
        ...state,
        settingstype: action.payload,
      };
    case "DEL_ITEM":
      return {
        ...state,
        expenses: state.expenses.filter((item) => item.id !== action.payload),
      };
    case "CHANGE_TYPE":
      return {
        ...state,
        settingstype: action.payload,
      };
    case "CHANGE_THEME":
      return {
        ...state,
        themetype: action.payload,
      };
    default:
      return state;
  }
};
