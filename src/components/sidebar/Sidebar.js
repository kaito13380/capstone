import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css' />


const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    // <div className="sidebar">
    //   <div className="sidebarWrapper">
    //     <h3 className="sidebarTitle">Dashboard</h3>
    //     <ul className="sidebarList">
    //       <li className="sidebarListItem">

    //         <Link to="/Home"> Home</Link>
    //       </li>
    //       <li className="sidebarListItem">

    //         <Link to="/formcrud"> testasd</Link>
    //       </li>
    //       <li className="sidebarListItem">
    //         <Link to="/Home"> Something</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <div className='sidebar'>
    <hr />
    <div className='center'>
      <ul>
        <p className="title">MAIN MENU</p>
        <li>
          <DashboardIcon className='icon' />
          <Link to="/home" className="item">
          <span>Dashboard</span>
        </Link>
        
        </li>
        <li>
          <GroupIcon className='icon' />
          <Link to="/formcrud" className="item">
          <span>User_Form</span>
        </Link>
        </li>
        <li>
        <NotificationsIcon className='icon' />
          <Link to="/formtest" className="item">
          <span>formcrud_test_2</span>
          </Link>
        </li>
        <li>
          <PsychologyIcon className='icon' />
          <span>Logs</span>
        </li>
        <li>
          <SettingsIcon className='icon' />
          <span>Settings</span>
        </li>
        <p className="title">ACCOUNT</p>
        <li>
          <PersonIcon className='icon' />
          <span>Profile</span>
        </li>
        <li>
          <ExitToAppIcon className='icon' />
          <span>Logout</span>
        </li>
      </ul>
    </div>
</div>
  )
}

export default Sidebar