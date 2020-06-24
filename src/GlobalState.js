import { atom, selector } from 'recoil';

import { TODO_FILTER } from './Filters';

export const todoItemsState = atom({
  key: 'todoItemsState',
  default: [],
});

export const todoFilterState = atom({
  key: 'todoFilterState',
  default: TODO_FILTER.SHOW_ALL,
});

export const todoItemAddedState = atom({
  key: 'todoItemAddedState',
  default: false,
});

export const todoItemOnEditState = selector({
  key: 'todoItemOnEditState',
  get: ({ get }) => {
    const todoItems = get(todoItemsState);
    return todoItems.filter(item => item.isEdit).length > 0;
  },
});

export const filteredTodoItemsState = selector({
  key: 'filteredTodoItems',
  get: ({ get }) => {
    const todoFilter = get(todoFilterState);
    const todoItems = get(todoItemsState);
    return todoItems.filter(item => todoFilter.apply(item));
  },
});

export const filteredTodoItemsCountState = selector({
  key: 'filteredTodoItemsCount',
  get: ({ get }) => {
    const todoFilter = get(todoFilterState);
    const todoItems = get(todoItemsState);
    return todoItems.filter(item => todoFilter.apply(item)).length;
  },
});
