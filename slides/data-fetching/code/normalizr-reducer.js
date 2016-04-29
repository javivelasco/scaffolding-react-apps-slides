import merge from 'lodash/merge';

const initialState = {
  books: {},
  users: {}
};

function entities(state = initialState, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }
  return state;
}
