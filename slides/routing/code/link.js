import React from 'react';
import { Link } from 'react-router';
import { resolver } from '../helpers';
import * as PATHS from '../routes';

const UserPathLink = ({ userId }) => (
  <Link to={resolver(PATHS.USER_PATH, userId)}>
    Profile
  </Link>
);

export default UserPathLink;
