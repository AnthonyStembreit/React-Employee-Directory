import React, { Component } from 'react';
import Search from './search'
import UserTable from './table'
import API from '../utils/api';

export default class TableContainer extends Component {
    state = {
        users: [],
        isFiltered: false,
        filteredUsers: [],
        input: ""
    }

    handleInputChange = event => {
        const { value } = event.target;
        this.setState({
            input: value,
            isFiltered:false
        })
    }

    filterUsers = (input, users) => {
        let filter = users.filter(user => user.name.first.toLowerCase() === input.toLowerCase())
        this.setState({
            input: "",
            isFiltered: true,
            filteredUsers: filter
        })
        console.log(this.state)
    }

    componentDidMount() {
        this.getUserData()
    }

    async getUserData() {
        try {
            const userResp = await API.getUsers()
            this.setState(prevState => { return { ...prevState, users: userResp.data.results } })
            console.log(userResp.data.results)
        } catch (err) {
            console.log(err)
        }
    }

        render(){
           if(this.state.isFiltered === false){
               return (
                   <div>
                       <Search  users={this.state.users} filterUsers={this.filterUsers} handleInputChange={this.handleInputChange} input={this.state.input}/>
                       <UserTable users={this.state.users}/>
                   </div>
               )
           }
           else if(this.state.isFiltered === true) {
            return (
                <div>
                    <Search  users={this.state.users} filterUsers={this.filterUsers} handleInputChange={this.handleInputChange} input={this.state.input}/>
                    <UserTable users={this.state.filteredUsers}/>
                </div>
            )
           }
        }
    }