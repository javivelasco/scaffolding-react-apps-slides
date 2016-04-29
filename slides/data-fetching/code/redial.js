import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { fetchUsers } from '../actions/users';
import UserList from '../components/UserList.js';

const hooks = {
  fetch: ({ dispatch }) => dispatch(fetchUsers()),
  defer: () => {}
};

const mapStateToProps = (state) => {
  const { entities: {users}} = state;
  const { pagination: {users: { ids, isFetching }}} = state;
  return { isFetching, users: ids.map(id => users[id]) };
};

export default connect(
  mapStateToProps
)(provideHooks(hooks)(UserList));
