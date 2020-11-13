import React from "react";
import SearchBar from "./jumbotron";

export default  function Search ({handleInputChange, input}) {
        return(
            <SearchBar   handleInputChange={handleInputChange} input={input} />
        )
}