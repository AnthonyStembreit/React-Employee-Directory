import React from 'react'
import { Table } from "react-bootstrap"
import TableRow from "./tablerow"



export default function UserTable({usersDisplayed, sortBy}) {
    return (
            <div>
                
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name      <button onClick={() => sortBy('fullName')}>Sort By</button></th>
                            <th>Email     <button onClick={() => sortBy('email')}>Sort By</button></th>
                            <th>Phone    <button onClick={() => sortBy('phone')}>Sort By</button></th>
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