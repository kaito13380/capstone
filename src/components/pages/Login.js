import React, { useState } from 'react';
import axios from 'axios';
import { getToken, setUserSession } from '../../Utils/Common';


function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  const config = {
    headers: {
      'accept': '*/*',
      'Content-Type': 'application/json'
    }
  };

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
      axios.post('https://fptquiz.conveyor.cloud/api/Login/login',
    { username: username.value, password: password.value },config
      
    ).then(response => {
        console.log(getToken);
        localStorage.setItem('token', getToken);
        localStorage.setItem('username', username.value);
      setLoading(false);
      setUserSession(response.data.token);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      // if (error.response.status === 401) setError(error.response.data.message);
      // else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;