/* eslint-disable react/prop-types */
import { useState } from "react";

function SearchBar({ setGetQuery }) {
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setGetQuery(input);
  };

  return (
    <div className="absolute flex justify-center items-center top-2/3 left-1/2 -translate-x-1/2">
      <form onSubmit={handleSearch} className="mb-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.trim())}
          className="border rounded-l p-2 w-[350px] text-black outline-none"
          placeholder="Search for a recipe..."
        />
        <button
          type="submit"
          className="px-4 py-3 bg-[#EE3715] text-white rounded-r"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
