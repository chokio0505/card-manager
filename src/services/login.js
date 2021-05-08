import axios from 'axios';
import api from './api';

const login = async credentials => {
  const response = await api.post('/authenticate', credentials);
  return response;
}

const signup = async user => {
  const response = await api.post('/signup_account', user);
  return response;
}

const sessionCheck = () => {
  let valid = false;
  api.get('/sessionCheck', {}).then(response => {
    valid = response.valid
    console.log('valid', valid);
    return response.valid
  });
  console.log('とおる？');
  return valid;
}

export default { login, signup, sessionCheck };