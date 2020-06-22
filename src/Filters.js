export const TODO_FILTER = {
  SHOW_ALL: {
    filter: () => true,
  },
  SHOW_DONE: {
    filter: (item) => item.isDone,
  },
  SHOW_TODO: {
    filter: (item) => !item.isDone,
  },
};