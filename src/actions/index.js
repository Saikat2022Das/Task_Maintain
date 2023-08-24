export const addTask = (data) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTask = (id, from) => {
  return {
    type: "DELETE_TASK",
    payload: { del_id: id, del_from: from },
  };
};

export const moveTask = (id, move_to, from) => {
  return {
    type: "MOVE_TASK",
    payload: {
      box_id: id,
      move_to: move_to,
      move_from: from,
    },
  };
};
