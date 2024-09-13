export const SET_USER = "SET_USER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK_COMPLETED = "TOGGLE_TASK_COMPLETED";
export const ADD_NOTE_TO_TASK = "ADD_NOTE_TO_TASK";
export const TOGGLE_TASK_IMPORTANT = "TOGGLE_TASK_IMPORTANT";
export const DELETE_TASK = "DELETE_TASK";

// Action creators
export const addTask = (name:any) => ({
  type: ADD_TASK,
  payload: { name },
});

export const toggleTaskCompleted = (taskId:any) => ({
  type: TOGGLE_TASK_COMPLETED,
  payload: { taskId },
});

export const addNoteToTask = (taskId:any, note:any) => ({
  type: ADD_NOTE_TO_TASK,
  payload: { taskId, note },
});

export const toggleTaskImportent = (taskId:any) => ({
  type: TOGGLE_TASK_IMPORTANT,
  payload: { taskId },
});

export const SET_DUE_DATE = "SET_DUE_DATE";
export const setDueDate = (taskId:any, dueDate:any) => ({
  type: SET_DUE_DATE,
  payload: { taskId, dueDate },
});


export const deleteTask = (taskId:any) => ({
  type: DELETE_TASK,
  payload: { taskId },
});