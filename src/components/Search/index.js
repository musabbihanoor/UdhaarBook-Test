import React from "react";

import { TextInput } from "flowbite-react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="w-[300px]">
      <TextInput icon={IoSearch} placeholder="Search a user..." />
    </div>
  );
};

export default Search;
