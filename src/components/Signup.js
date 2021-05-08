import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import loginService from '../services/login';

import { BrowserRouter as Link, useHistory } from 'react-router-dom';


const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  const emailHandleChange = (event) => {
    setEmail(event.target.value);
    console.log('email', email);
  }

  const passwordlHandleChange = (event) => {
    setPassword(event.target.value);
    console.log('password', password);
  }

  const handleSignup = async (event) => {
    event.preventDefault();

    const newUser = {
      email,
      name,
      password,
    }

    const user = await loginService.signup(newUser);
    // const user = { name: 'tanaka', age: 35 };

    console.log('user', user);

    props.userHanle(user);
    setEmail('');
    setPassword('');
    setName('');
    history.push('/');
  }

  return (
    <>
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={emailHandleChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={passwordlHandleChange} />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name" onChange={(event) => {setName(event.target.value)}} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
    
  )
}

export default Signup;