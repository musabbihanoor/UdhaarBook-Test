import React from "react";
import UserItem from "../Item";

const UserList = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full">
      {users.map((x) => (
        <UserItem key={x.id} user={x} />
      ))}
    </div>
  );
};

export default UserList;
