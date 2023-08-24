const initialState = {
  openlist: [],
  inprogress: [],
  review: [],
  closed: [],
};

const todoOperations = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const { id, data } = action.payload;
       
      return {
        ...state,
        openlist: [
          ...state.openlist,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TASK":
      const { del_id, del_from } = action.payload;
      let updatedListKey;
      console.log(del_id);
      switch (del_from) {
        case "open":
          updatedListKey = "openlist";
          break;
        case "inprogress":
          updatedListKey = "inprogress";
          break;
        case "review":
          updatedListKey = "review";
          break;
        case "closed":
          updatedListKey = "closed";
          break;
        default:
          return state;
      }

      const new_list = state[updatedListKey].filter(
        (elem) => elem.id !== del_id
      );
      return {
        ...state,
        [updatedListKey]: new_list,
      };

    case "MOVE_TASK":
      const { box_id, move_to, move_from } = action.payload;
      console.log("Move from:", move_from);
      console.log("Move to:", move_to);

      let move_from_list_key;
      switch (move_from) {
        case "open":
          move_from_list_key = "openlist";
          break;
        case "inprogress":
          move_from_list_key = "inprogress";
          break;
        case "review":
          move_from_list_key = "review";
          break;
        case "closed":
          move_from_list_key = "closed";
          break;
        default:
          return state;
      }
      const taskToMove = state[move_from_list_key].find(
        (elem) => elem.id === box_id
      );
      const updatedCurrList = state[move_from_list_key].filter(
        (elem) => elem.id !== box_id
      );

      let updatedState;
      switch (move_to) {
        case "open":
          updatedState = {
            ...state,
            [move_from_list_key]: updatedCurrList,
            openlist: [...state.openlist, taskToMove],
          };
          break;
        case "inprogress":
          updatedState = {
            ...state,
            [move_from_list_key]: updatedCurrList,
            inprogress: [...state.inprogress, taskToMove],
          };
          break;
        case "review":
          updatedState = {
            ...state,
            [move_from_list_key]: updatedCurrList,
            review: [...state.review, taskToMove],
          };
          break;
        case "closed":
          updatedState = {
            ...state,
            [move_from_list_key]: updatedCurrList,
            closed: [...state.closed, taskToMove],
          };
          break;
        default:
          return state;
      }
      return updatedState;

    default:
      return state;
  }
};

export default todoOperations;
