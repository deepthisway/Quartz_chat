import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
   <div className="h-[10vh]">
     <div className="px-6 py-4">
      <form action="">
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-[80%] max-w-xs"
          />
          <button>
            <FaSearch className="text-4xl p-2 hover:bg-gray-500 rounded-full duration-300"/>
          </button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default Search;
