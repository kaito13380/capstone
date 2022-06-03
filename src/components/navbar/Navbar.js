import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, Routes, Route } from "react-router-dom";
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MessageIcon from '@mui/icons-material/Message';
export default class MenuExampleBasic extends Component {
  state = {}




  render() {
    const { activeItem } = this.state
    const Navbar = ({ setToggle }) => { }

    return (
      // <div className="topbar">
      //   <div className="topbarWrapper">
      //     <div className="top-left">
      //       <span className="logo">logo</span>
      //     </div>
      //     <div className="search">
      //     <input type="text" placeholder='Search...' />
      //     <SearchIcon />
      //   </div>
      //     <div className="center">center</div>
      //     <div className="top-right">
      //       <button>logout</button>
      //     </div>
      //   </div>
      // </div>
      <div className='navbar'>
      
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <NotificationsActiveIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className="item">
            <MessageIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className="item">
            <img src='https://www.iriset.in/tms/uploads/profile/profile.png' alt="user" className='avatar' />
          </div>
        </div>
      </div>
    </div>
    )
  }
}
