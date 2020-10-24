import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function SearchBar ({handleInputChange, filterUsers, users, input}){
return (
<Jumbotron>
    <Form.Control type="text"
        placeholder="Search by Name"
        value={input}
        name="input"
        onChange={handleInputChange} />
    <Button onClick={() => filterUsers(input, users)}/>
</Jumbotron>
)
}