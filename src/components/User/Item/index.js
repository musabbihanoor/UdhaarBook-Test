import React from "react";

import { Button, Card } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <Card className="max-w-sm">
      <div className="flex flex-col items-center pb-10">
        <img
          alt={login}
          src={avatar_url}
          className="mb-3 rounded-full shadow-lg w-[150px] h-[150px]"
        />
        <Link to={`/${login}`}>
          <h5 className="mb-3 text-xl hover:underline cursor-pointer">
            {login}
          </h5>
        </Link>

        <Button href={html_url} target="_blank">
          Visit <FaExternalLinkAlt className="ml-2" />
        </Button>
      </div>
    </Card>
  );
};

export default UserItem;
