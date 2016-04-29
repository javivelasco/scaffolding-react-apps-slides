import { connect } from 'react-redux';
import { fetchUsers } from '../actions/users';
import UserList from '../components/UserList.js';

const mapStateToProps = (state) => {
  const {
    entities: { users },
    pagination: { users: { ids, isFetching } }
  } = state;

  return {
    fetchUsers,
    isFetching,
    users: ids.map(id => users[id])
  };
};

export default connect(
  mapStateToProps
)(UserList);
