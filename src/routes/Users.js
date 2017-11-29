import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UsersComponent from '../components/Users/Users';

function Users(props) {
  return (
    <div className={styles.normal}>
      Route Component: 'Users'
      <UsersComponent />
    </div>
  );
}
export default connect()(Users);
