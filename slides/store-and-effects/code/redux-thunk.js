function increment() {
  return { type: 'INCREMENT_COUNTER' };
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

store.dispatch(incrementAsync());
