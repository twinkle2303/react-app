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
    case "EXTRACT_ITEM_2":
      return {
        ...state,
        foundobj: state.todos.find((item) => {
          return item.id === action.payload;
        }),
      };
    case "REPLACE_WITH_2":
      state.todos.forEach((element) => {
        if (element.id === action.payload.id) {
          element.description = action.payload.description;
          element.amount = action.payload.amount;
          element.date = action.payload.date;
          element.note = action.payload.note;
        }
      });
    case "EXTRACT_ITEM_3":
      return {
        ...state,
        foundobj: state.groceries.find((item) => {
          return item.id === action.payload;
        }),
      };
    case "REPLACE_WITH_3":
      state.groceries.forEach((element) => {
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
    case "DEL_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((item) => item.id !== action.payload),
      };
    case "DEL_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case "DEL_ITEM":
      return {
        ...state,
        groceries: state.groceries.filter((item) => item.id !== action.payload),
      };
    case "CHANGE_TYPE":
      return {
        ...state,
        settingstype: action.payload,
      };
    case "CHANGE_FILTER":
      return {
        ...state,
        filtertype: action.payload,
      };
    case "CHANGE_THEME":
      return {
        ...state,
        themetype: action.payload,
      };
    case "CHANGE_LAYOUT":
      return {
        ...state,
        layouttype: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "ADD_ITEM":
      return {
        ...state,
        groceries: [...state.groceries, action.payload],
      };
    default:
      return state;
  }
};
