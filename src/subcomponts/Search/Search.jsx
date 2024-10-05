import React from 'react';
import './Search.css';
import { RxCross2 } from "react-icons/rx";

const Search = ({ open, cross }) => {
  return (
    <div>
      <div className={`parent ${open ? "opend" : ""}`}>
        <form action="">
          <input type="text" name="search" placeholder="Search" />
          <button>Search</button>
        </form>

       

        <span className="cross" onClick={cross}>
          <RxCross2 />
        </span>
      </div>
    </div>
  );
};

export default Search;