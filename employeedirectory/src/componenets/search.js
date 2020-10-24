import React from "react";
import SearchBar from "./jumbotron";

export default  function Search ({handleInputChange, filterUsers, users, input}) {
        return(
            <SearchBar  users={users} handleInputChange={handleInputChange} filterUsers={filterUsers} input={input} />
        )
}