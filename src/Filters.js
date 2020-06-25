const TODO_FILTER = {
  SHOW_ALL: {
    apply: () => true,
    name: '전체보기',
  },
  SHOW_DONE: {
    apply: item => item.isDone,
    name: '완료한 일',
  },
  SHOW_TODO: {
    apply: item => !item.isDone,
    name: '해야할 일',
  },
};

export default TODO_FILTER;
