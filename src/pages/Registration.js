import React, { useState } from 'react';
import axios from 'axios';
import getConstants from '../constants';

const Registration = () => {
  const constants = getConstants();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let url = constants.API_BASE_URL+'/users';
    axios.post(url, {
      user: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      }
    })
    .then(response => {
      console.log(response.data, "created");
      // handle successful registration
    })
    .catch(error => {
      console.log(error.response.data);
      // handle registration errors
    });
  };
  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
