import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import loginService from '../services/login';

import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  

  const emailHandleChange = (event) => {
    setEmail(event.target.value);
    console.log('email', email);
  }

  const passwordlHandleChange = (event) => {
    setPassword(event.target.value);
    console.log('password', password);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const user = await loginService.login({
      email, password,
    });

    console.log('user', user);

    props.userHanle(user);
    history.push('/');

    setEmail('');
    setPassword('');
  }

  return (
    <>
      <Form onSubmit={handleLogin}>
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
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link to="/signup"><span>新規登録はこちら</span></Link>
      
    </>
    
  )
}

export default Login;