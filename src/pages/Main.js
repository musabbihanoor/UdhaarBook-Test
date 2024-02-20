import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import Search from "../components/Search";
import UserList from "../components/User/List";
import UserModal from "../components/Modal";

import { getUsers, getUser, getSearchedUser } from "../store/user/actions";

const Main = ({ users, user, getUsers, getUser, getSearchedUser }) => {
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  useEffect(() => {
    fetchUserByUsername();
  }, [username]);

  const fetchAllUsers = () => {
    getUsers();
  };

  const fetchSearchUsers = (username) => {
    getSearchedUser(username);
  };

  const fetchUserByUsername = () => {
    username && getUser(username);
  };

  const handleCloseModal = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center p-20 gap-10">
      <Search
        fetchSearchUsers={fetchSearchUsers}
        fetchAllUsers={fetchAllUsers}
      />

      {users ? <UserList users={users} /> : <p>Users not found!</p>}
      {user && username && (
        <UserModal user={user} handleClose={handleCloseModal} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  users: state.userReducer.users,
});

const mapDispatchToProps = {
  getUser,
  getUsers,
  getSearchedUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
