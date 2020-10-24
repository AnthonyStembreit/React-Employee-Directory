import React from 'react'
import { Table } from "react-bootstrap"
import TableRow from "./tablerow"



export default function UserTable({usersDisplayed}) {
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
                        {usersDisplayed.map(user => (
                            <TableRow thumbnail={user.picture.thumbnail} email={user.email} phone={user.phone} name={user.name.first + " " + user.name.last} />
                        ))}
                    </tbody>
                </Table>
            </div>
    )
}