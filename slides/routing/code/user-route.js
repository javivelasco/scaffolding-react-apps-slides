import { connect } from 'react-redux';
import { sendFriendRequest } from '../actions/users';
import UserProfile from '../components/UserProfile.js';

const mapStateToProps = (state, props) => ({
  user: state.users[props.params.userId]
});

const mapDispatchToProps = (dispatch, props) => ({
  sendFriendRequest: () => dispatch(sendFriendRequest(props.params.userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
