import React from 'react';
import icons from '../ultils/icons';

const { BiSearchAlt2 } = icons;

const Search = () => {
  return (
    <div className="flex justify-between ">
      <form action="">
        <input
          type="text"
          placeholder="search"
          className="px-2 py-3 placeholder-gray-500 text-black border-0 rounded-2xl border-none ring-blue-400 "
        />
      </form>
      <button className="px-2 py-3 focus:text-gray-500">
        <BiSearchAlt2 />
      </button>
    </div>
  );
};

export default Search;
