import { SET_LIST, UPDATE_LIST, UPDATE_TASK } from "./ListActions";

export default function ListReducer(list, action) {
  switch (action.type) {
    case SET_LIST:
      return [...list];
    case UPDATE_LIST:
      return [action.payload, ...list];
    case UPDATE_TASK:
      return [
        ...list.map((task) => {
          if (task.id !== action.payload.id) return task;
          return {
            ...task,
            isCheckedOff: !task.isCheckedOff,
          };
        }),
      ];
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
