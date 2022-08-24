import React, { useState } from "react";
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";

function Index({ small, handleSearch }) {
  const [value, setValue] = useState("");

  return (
    <div style={{ height: small && "40px" }} className="input_wrap">
      <SearchIcon />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input"
        id="search"
        type="text"
      />
      <button onClick={() => handleSearch(value)} className="btn">
        Search
      </button>
    </div>
  );
}

export default React.memo(Index);
