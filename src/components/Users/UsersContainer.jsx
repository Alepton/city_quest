import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator, setCurrentPageCreator, setTotalUsersCountCreator } from '../../redux/users-reducer';
import Users from './Users';

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers (response.data.items);
        this.props.setTotalUsersCount (response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers (response.data.items);
      });
  }

  render() {

    return <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
    />
  }

}

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

export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer);
