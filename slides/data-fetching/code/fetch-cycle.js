import React, { Component } from 'react';

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return this.props.isFetching
      ? <p>Busy...</p>
      : <div>{this.renderContent()}</div>;
  }
}

export default UserList;
