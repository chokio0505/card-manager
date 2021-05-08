import React, { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Login from './components/Login';
import Signup from './components/Signup'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import loginService from './services/login';



const Auth = (props) => {
  const check = async () => {
    const response = await loginService.sessionCheck();
    return response;
  }
  // const check = await oginService.sessionCheck();
  console.log('aaa', loginService.sessionCheck());
  if (check()) {
    console.log('ok!!!!');
    return props.children;
  } else {
    console.log('ng!!!');
    return <Redirect to={'/login'} />
  }


}

const App = () => {
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const hook = () => {
    console.log('isLogin', isLogin);
    setLogin(true);
    console.log('isLogin', isLogin);
  }

  const userHanle = (user) => {
    setUser(user);
  }

  useEffect(hook, []);

  const buttonHnadle = async (props) => {
    const response = await loginService.sessionCheck();
    if (response.valid) {
      console.log('ok!!!!');
      return props.children;
    } else {
      console.log('ng!!!');
      return <Redirect to={'/login'} />
    }
  }

  return (
    <>
     <Router>
      <Navbar>
        <Link to="/">
          <Navbar.Brand>Card Manager</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <Link to="/login">Mark Otto</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>
        <Switch>
            <Route exact path="/login">
              <Login userHanle={userHanle} />
            </Route>
            <Route exact path="/signup">
              <Signup userHanle={userHanle} />
            </Route>
            <Auth test="props">
              <Switch>
                <Route exact path="/">
                  <div>
                    <div>hello world!!</div>
                    <Button variant="success" onClick={buttonHnadle}>ボタンだよ</Button>
                  </div>
                  {user !== null && <div>ログインしてるよ</div>}
                </Route>
              </Switch>
              
            </Auth>
        </Switch>
      </Container>
      </Router>
    </>
    
  )
}

export default App;
