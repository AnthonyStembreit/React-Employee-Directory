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

    handleInputChange = (event) => {
        const { value } = event.target;
        this.setState({
            input: value,
            isFiltered:false
        }, () => 
        this.filterUsers()
        )
    }

    compareBy = (key) => {
        
        return function (a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        };
    }
    sortBy = (key) => {
        let arrayCopy = [...this.state.filteredUsers];
        arrayCopy.sort(this.compareBy(key));
        this.setState({filteredUsers: arrayCopy, isFiltered: true});
      }

    filterUsers = () => {
        let filter = this.state.users.filter(user => user.name.first.toLowerCase().search(this.state.input.toLowerCase()) !== -1 )
        this.setState({
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
            let cleanUserData = userResp.data.results.map(user => {
                return {
                    ...user,
                    fullName: user.name.first + " " + user.name.last
                }
            })
            this.setState(prevState => { return { ...prevState, users: cleanUserData, filteredUsers: cleanUserData } })
            console.log(userResp.data.results)
        } catch (err) {
            console.log(err)
        }
    }

        render(){
               return (
                   <div>
                       <Search  handleInputChange={this.handleInputChange} input={this.state.input}/>
                       <UserTable sortBy={this.sortBy} usersDisplayed={this.state.isFiltered ? this.state.filteredUsers : this.state.users}/>
                   </div>
               )
        }
    }