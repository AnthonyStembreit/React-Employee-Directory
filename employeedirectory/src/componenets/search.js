import React, { Component } from "react";
import SearchBar from "./jumbotron";

export default class Search extends Component {

    state = {
       name: "" 
    }

    handleInputChange = event => {
        const {value} = event.target;
        this.setState({
            name: value
        })
        console.log(this.state)
    }

    render(){
        return(
            <SearchBar handleInputChange={this.handleInputChange} name={this.state.name} />
        )
    }
}