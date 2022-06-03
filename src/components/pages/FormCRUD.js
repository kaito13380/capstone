
import { wait } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'
import { FormCheckbox } from 'semantic-ui-react';

export default function FormCRUD() {
    const [users, setUser] = useState([])
    const isStatus = false;
    // const [userID, setUserID] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [roleID, setRoleID] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [fullname, setfullname] = useState(""); 
    const [resultID, setResultID] = useState("");
    const[status,setStatus]= useState("");
    // const[testID,setTestID]=useState("");
    const [email, setEmail] = useState("");
    const[token,setToken]= useState("");
    const [userID,setID]=useState('null')
  
    useEffect(() => {
      getUsers();
    }, [])
    function getUsers() {
      fetch("https://fptquiz.conveyor.cloud/api/Users",{
        headers:{
          'Accept':'text/plain',
          'Content-Type':'application/json; charset=utf-8 ',
     
          
        },
      }).then((result) => {
        result.json().then((resp) => {
          // console.warn(resp)
          setUser(resp)
          setUserName(resp[0].userName)
          setPassword(resp[0].password)
          setEmail(resp[0].email)
          setRoleID(resp[0].roleID)
          setPhoneNumber(resp[0].phoneNumber)
          setAddress(resp[0].address)
          setfullname(resp[0].fullname)
          setResultID(resp[0].resultID)
          setStatus(resp[0].status)
          // setTestID(resp[0].testID)
          setToken(resp[0].token)
          setID(resp[0].userID)
        })
      })
      
    }
  
    // function deleteUser(id) {
    //   fetch(`http://localhost:3001/user/${id}`, {
    //     method: 'DELETE'
    //   }).then((result) => {
    //     result.json().then((resp) => {
    //       console.warn(resp)
    //       getUsers()
    //     })
    //   })
    // }
    // function deleteUser(id) {
    //   let item={status}
    //   console.warn("item",item)
    //   fetch(`http://localhost:3001/user/${id}`, {
    //     method: 'PUT',
    //     headers:{
    //       'Accept':'application/json',
    //       'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(item)
    //   }).then((result) => {
    //     result.json().then((resp) => {
    //       console.warn(resp)
    //       getUsers()
    //     })
    //   })
    // }
    function selectUser(userID)
    {
      let item=users[userID-1];
      setUserName(item.userName);
      setPassword(item.password);
          setEmail(item.email);
          setRoleID(item.roleID);
          setPhoneNumber(item.phoneNumber);
          setAddress(item.address);
          setfullname(item.fullname);
          setStatus(item.status);
       
          setToken(item.token);
          setID(item.userID)
    }
    function UpdateStatus(){
      const data = !Boolean(status);
      status = (data.toString());
    }
    function updateUser()
    {
      let item={userID,userName,password,email,roleID,phoneNumber,address,fullname,resultID,status,token}
      console.warn("item",item)
      fetch(`https://fptquiz.conveyor.cloud/api/Users/${userID}`, {
        method: 'PUT',
        headers:{
          'Accept':'accept: */*',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(item)
      }).then( (result) =>{
        console.log(result);
        getUsers();
      });
    }
  
    return (
      <div>
          <h1>load User Form </h1>
    <table border="1" style={{ float: 'left' }}>
      <tbody>
        <tr>
        
          <td>UserID</td>
          <td>userName</td>
          <td>password</td>
          <td>email</td>
          <td>roleID</td>
          <td>phoneNumber</td>
          <td>address</td>
          <td>fullname</td>
          <td>resultID</td>
          <td>status</td>
          <td>token</td>
          
        </tr>
        {
          users.map((item, i) =>
            <tr key={i}>
              <td>{item.userID}</td>
              <td>{item.userName}</td>
              <td>{item.password}</td>
              <td>{item.email}</td>
              <td>{item.roleID}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.address}</td>
              <td>{item.fullname}</td>
              <td>{item.resultID}</td>
              
              {/* <input value={status} disabled={true}/> */}
              <td>{item.status.toString()}</td>
              <td>{item.token}</td>
              <td><button onClick={() => selectUser(item.userID)}>Update</button></td>

            </tr>
          )
        }
      </tbody>
    </table>
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <a>userName</a>
    <input type="text" placeholder='UserName' value={userName} onChange={(e)=>{setUserName(e.target.value)}} /> <br /><br />
    <a>email</a>
    <input type="text" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />
    <a>password</a>
      <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br /><br />
     
      <a>roleID</a>
      <input type="text" placeholder='roleID' value={roleID} onChange={(e)=>{setRoleID(e.target.value)}} /> <br /><br />
      <a>phoneNumber</a>
      <input type="text" placeholder='phoneNumber' value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} /> <br /><br />
      <a>address</a>
      <input type="text" placeholder='address' value={address} onChange={(e)=>{setAddress(e.target.value)}} /> <br /><br />
      <a>fullname</a>
      <input type="text" placeholder='fullname' value={fullname} onChange={(e)=>{setfullname(e.target.value)}} /> <br /><br />
      <a>resultID</a>
      <input type="text" placeholder='resultID' value={resultID} onChange={(e)=>{setResultID(e.target.value)}} /> <br /><br />
      <a>status</a>
      <input
      placeholder='status'
        type="checkbox"
        checked={status}
        onChange={(e) => setStatus(e.target.checked)}
      />
      <br></br>
      <a>token</a>
      <input type="text" placeholder='token' value={token} onChange={(e)=>{setToken(e.target.value)}} /> <br /><br />
      <button onClick={updateUser} >Update User</button>  
 
     
    </div>
      </div>
    )
  
}

