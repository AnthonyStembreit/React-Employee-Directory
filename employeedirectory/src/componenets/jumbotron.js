import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'

export default function SearchBar ({handleInputChange, name}){
return (
<Jumbotron>
    <Form.Control type="text"
        placeholder="Search by Name"
        value={name}
        name="name"
        onChange={handleInputChange} />
</Jumbotron>
)
}