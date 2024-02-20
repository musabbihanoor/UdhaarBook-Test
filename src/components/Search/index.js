import React, { useState, useEffect } from "react";
import { TextInput } from "flowbite-react";
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Search = ({ fetchSearchUsers, fetchAllUsers }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // debouncing for 1 second
    const timer = setTimeout(() => {
      // fetches user if there's a search text otherwise it fetches the list
      searchText ? fetchSearchUsers(searchText) : fetchAllUsers();
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchText]);

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <div className="w-[500px] flex gap-5">
      <TextInput
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        icon={IoSearch}
        placeholder="Search a user..."
        className="flex-1"
      />

      {/* button to clear the search results */}
      {searchText && (
        <button onClick={handleClear}>
          <RxCross1 />
        </button>
      )}
    </div>
  );
};

export default Search;
