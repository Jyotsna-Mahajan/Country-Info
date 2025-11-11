import { useState } from "react";

export default function SearchBox({ onSearch }) {
  let [query, setQuery] = useState("");

  let handleClick = (event) => {
    event.preventDefault();
    if (query.trim() === "") return;
    onSearch(query);
    setQuery("");
  };

  let updateSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-box">
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Enter country name..."
          value={query}
          onChange={updateSearch}
        />
        <br></br>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
