import React from "react";
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";

function Index({ small }) {
  return (
    <div style={{ height: small && "40px" }} className="input_wrap">
      <SearchIcon />
      <input className="input" type="text" />
      <button className="btn">Search</button>
    </div>
  );
}

export default Index;
