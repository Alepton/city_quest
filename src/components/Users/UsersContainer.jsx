import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/users-reducer';
import Users from './Users';
import c from './Users.module.css';

// функция принимает state всего приложения и возвращает те данные которые нам нужны именно тут (список пользователей)
let mapStateToProps = (state) => {
  return {
    users: state.userPage.users
  }
}

//функция служит что бы передавать дочерней компоненьте через пропсы колбэки
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch (followActionCreator (userId) );
    },

    unfollow: (userId) => {
      dispatch (unfollowActionCreator (userId) );
    },

    setUsers: (users) => {
      dispatch (setUsersActionCreator (users) );
    },

  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);
