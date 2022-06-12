import React from 'react';
import { removeUserSession } from '../../Utils/Common';


function Dashboard(props) {
 

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
      <div>
          Welcome {localStorage.getItem('token')}! < br /><br />
          <input type="button"
              value="Logout"
              onClick={handleLogout}/>
    </div>
  );
}

export default Dashboard;
