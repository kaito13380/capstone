import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home.Page';
import Navbar from './components/navbar/Navbar';
import FormCRUD from './components/pages/FormCRUD';
import Sidebar from './components/sidebar/Sidebar';
import FormCRUD_1 from './components/pages/FormCRUD_1';
import axios from 'axios';


import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
const styles = {
  // position: 'absolute',
};

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get()
        .then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
  return (
    <div className="App">
      <Navbar />
      <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
      <div className="container">
        <Sidebar className={styles} ></Sidebar>
        <div className="other">
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/formcrud' element={<FormCRUD />}>FormCRUD</Route>
            <Route path='/formtest' element={<FormCRUD_1/>}></Route>
            <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
          </Routes>
        </div>
      </div>

    </div>
  );
}


export default App;




