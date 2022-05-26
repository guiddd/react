import './App.css';
import React, { Fragment } from 'react'
import Form from './components/Form';
import Users from './components/Users';

function App() {
  return (
    <React.Fragment>
      <Form/>
      <hr />
      <Users/>
      <hr />
    </React.Fragment>
  );
}

export default App;