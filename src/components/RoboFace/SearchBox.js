import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa3 ">
      <input
        className="pa2 ba b--green bg-lightest-blue col-4 "
        type="search"
        placeholder="Enter your Name"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
