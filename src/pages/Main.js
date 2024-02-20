import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// components
import Search from "../components/Search";
import UserList from "../components/User/List";
import UserModal from "../components/Modal";

// services
import { getUsers, getUser, getSearchedUser } from "../store/user/actions";

const Main = ({ users, user, getUsers, getUser, getSearchedUser }) => {
  // checks param to fetch the selected user
  const { username } = useParams();

  const navigate = useNavigate();

  // fetch all users initially
  useEffect(() => {
    fetchAllUsers();
  }, []);

  // fetch user by username after the username on the url param is updated
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

  // closes the modal for selected user by
  // redirecting it to the route without username
  const handleCloseModal = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center p-20 gap-10">
      {/* Search component */}
      <Search
        fetchSearchUsers={fetchSearchUsers}
        fetchAllUsers={fetchAllUsers}
      />

      {/* renders user list if there are users */}
      {users ? <UserList users={users} /> : <p>Users not found!</p>}

      {/* renders user modal if there is username in the param and the user is searched */}
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
