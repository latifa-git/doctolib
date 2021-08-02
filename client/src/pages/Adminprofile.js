import React from 'react'
import {useSelector } from "react-redux";
import { Button } from "antd";



const  Adminprofile = () => {
    const {token } = useSelector(state => state)

    const handleClick = () =>{
        fetch("/appointments/")
        .then(results => {
          return results.json();
        })
        .then(data => {
          let users
    = data.map((user) => {
            console.log("user ", user);
            return (
              <li>{user}</li>
            );
          })
          // this.setState({users: users});
          return (
            <ol>
              {users}
            </ol>
          );
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    
    return (
        <div>
            <h1>hi {token.name}</h1>
         <h3> list of patients allready register</h3>
       
         <h3> list of doctors allready exist</h3>
         <h3> list of appointment</h3>
         <Button onClick={handleClick} type="text">get all appointments</Button> 
        </div>
    )
}

export default Adminprofile
