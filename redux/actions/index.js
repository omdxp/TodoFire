import {ADD_TODO, TOGGLE_TODO} from './action-types';

let nextId = 0;
export const addTodoAction = (text) => ({
  type: ADD_TODO,
  id: nextId++,
  text,
});

export const toggleTodoAction = (id) => ({
  type: TOGGLE_TODO,
  id,
});
