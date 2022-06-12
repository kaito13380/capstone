import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from "react-router-dom";
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
      <div className="container">
        <Sidebar className={styles} ></Sidebar>
        <div className="other">
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/formcrud' element={<FormCRUD />}>FormCRUD</Route>
            <Route path='/formtest' element={<FormCRUD_1/>}></Route>
          </Routes>
        </div>
      </div>

    </div>
  );
}


export default App;




