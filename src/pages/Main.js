import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import Search from "../components/Search";
import UserList from "../components/User/List";
import UserModal from "../components/Modal";

import { getUsers, getUser } from "../store/user/actions";

const Main = ({ users, user, getUsers, getUser }) => {
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchUserByUsername();
  }, [username]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const fetchUsers = () => {
    getUsers();
  };

  const fetchUserByUsername = () => {
    username && getUser(username);
  };

  const handleCloseModal = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center p-20 gap-10">
      <Search />
      <UserList users={users} />

      {username && <UserModal user={user} handleClose={handleCloseModal} />}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
