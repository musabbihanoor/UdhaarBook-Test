import React from "react";

import { Button, Modal } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";

const UserModal = ({
  user: { followers, following, avatar_url, location, html_url, login },
  handleClose,
}) => {
  return (
    <Modal dismissible show={true} onClose={handleClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="flex flex-col items-center pb-10">
          <img
            alt={login}
            src={avatar_url}
            className="mb-3 rounded-full shadow-lg w-[200px] h-[200px]"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {login}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {location}
          </span>
          <div className="my-4 flex space-x-3 lg:mt-6">
            <a className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              {followers} Followers
            </a>
            <a className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              {following} Following
            </a>
          </div>

          <Button href={html_url} target="_blank">
            Visit <FaExternalLinkAlt className="ml-2" />
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UserModal;
