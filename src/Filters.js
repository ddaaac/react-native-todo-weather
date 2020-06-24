export const TODO_FILTER = {
  SHOW_ALL: {
    apply: () => true,
  },
  SHOW_DONE: {
    apply: (item) => item.isDone,
  },
  SHOW_TODO: {
    apply: (item) => !item.isDone,
  },
};