import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import UserTable from './componenets/table'


function App() {
  return (
    <div className="App">
      <Jumbotron>
        <Form.Control type="search" placeholder="Search by Name" onChange />
      </Jumbotron>
      <UserTable />
    </div>
  );
}

export default App;
