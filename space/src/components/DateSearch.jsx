import { useEffect, useState } from "react";
import { getPictureOfTheDay } from "../services/api";
import "../css/SearchBar.css";

function DateSearch() {
  return (
    <div>
      <form className="search-form" action={getPictureOfTheDay.data}>
        <input
          name="date"
          type="text"
          placeholder="Search For Date (YYYY-MM-DD)"
          className="search-input"
        />
      </form>
    </div>
  );
}

export default DateSearch;
