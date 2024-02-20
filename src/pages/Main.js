import React, { useEffect } from "react";
import { connect } from "react-redux";

import Search from "../components/Search";
import UserList from "../components/User/List";
import { getUsers } from "../store/user/actions";

const Main = ({ users, getUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    getUsers();
  };

  return (
    <div className="flex flex-col items-center p-20 gap-10">
      <Search />
      <UserList users={users} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
