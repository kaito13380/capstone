import React, { useState } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home.Page';
import Navbar from './components/navbar/Navbar';
import FormCRUD from './components/pages/FormCRUD';
import Sidebar from './components/sidebar/Sidebar';
import FormCRUD_1 from './components/pages/FormCRUD_1';
import Login from './components/pages/Login';


const styles = {
  // position: 'absolute',
};

function App() {

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
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </div>
      </div>

    </div>
  );
}


export default App;




