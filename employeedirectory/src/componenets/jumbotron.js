import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function SearchBar ({handleInputChange, input}){
return (
<Jumbotron>
    <Row>
    <Col>
    <Form.Control type="text"
        placeholder="Search by First Name"
        value={input}
        name="input"
        onChange={handleInputChange} />
    </Col>
    </Row>
</Jumbotron>
)
}