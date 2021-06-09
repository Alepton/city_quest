import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage,
         toggleFollowingInProgress,
         requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getCurrentPage, getTotalUsersCount, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';


class UsersContainer extends React.Component {
  componentDidMount() {

    this.props.requestUsers(this.props.currentPage, this.props.pageSize);

    /*this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });*/
  }

  onPageChanged = (pageNumber) => {

    this.props.requestUsers(pageNumber, this.props.pageSize);


    /*this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.setUsers(data.items);
        this.props.toggleIsFetching(false);
      });*/
  };

  render() {
    return (
      <>
      { this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}


// функция принимает state всего приложения и возвращает те данные которые нам нужны именно тут (список пользователей)

/*
let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    followingInProgress: state.userPage.followingInProgress
  }
}
*/

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}




export default compose (
  // withAuthRedirect,
  connect (mapStateToProps, {
    follow, unfollow, setCurrentPage,
    toggleFollowingInProgress, requestUsers
  })
)(UsersContainer);
