import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
// Correct import if the icon is named differently
import Search from "@mui/icons-material/Search";

import React from "react";
import { BorderAll } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input className="search-bar" placeholder="Search......"  value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} style={{border: "none"}} />

      <IconButton type="Submit" sx={{p:"10px" , color :"red"}}>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
