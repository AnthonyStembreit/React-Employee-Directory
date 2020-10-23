import React, { Component } from 'react'
import { Table } from "react-bootstrap"
import TableRow from "./tablerow"
import API from '../utils/api';


export default class UserTable extends Component {
    state = {
        users: [],
    }

componentDidMount(){
    this.getUserData()
}

async getUserData(){
    try {
        const userResp = await API.getUsers()
        this.setState(prevState=>{return{...prevState, users: userResp.data.results}})
        console.log(userResp.data.results)
    } catch (err){
        console.log(err)
    }

}

render(){
    return (
        <div>
            
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map(user =>(
                        <TableRow thumbnail={user.picture.thumbnail} email={user.email} phone={user.phone} name={user.name.first + " " + user.name.last}/>
                    ))}
                </tbody>
            </Table>
        </div>
)
}

}