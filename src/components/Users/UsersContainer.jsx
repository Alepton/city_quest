import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator, setCurrentPageCreator, setTotalUsersCountCreator } from '../../redux/users-reducer';
import Users from './Users';
import c from './Users.module.css';

// функция принимает state всего приложения и возвращает те данные которые нам нужны именно тут (список пользователей)
let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage
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

    setCurrentPage: (pageNumber) => {
      dispatch (setCurrentPageCreator (pageNumber))
    },

    setTotalUsersCount: (totalCount) => {
      dispatch (setTotalUsersCountCreator (totalCount))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);
