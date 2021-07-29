import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { logoutAction } from "../redux/actions/action";

const Adminprofile = () => {
  const dispatch = useDispatch();
  //const token = useSelector((state) => state.token);

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <div>
       <h1>hi admin</h1>
      <Link to={"SignIn"}>
        <Button onClick={handelSubmit} type="text"></Button>
        log out
      </Link>
    </div>
  );
};

export default Adminprofile;

// import React from 'react'
// import {useEffect} from 'react-redux'
// import { logoutAction } from '../redux/actions/action'
// const Adminprofile = () => {

//     useEffect(() => {
//         const handleInvalidToken = e => {
//           if (e.key === 'token' && e.oldValue && !e.newValue) {
//             // Your logout logic here

//             console.log(e)
//             logoutAction(history);

//           }
//         }
//         window.addEventListener('storage', handleInvalidToken)
//         return function cleanup() {
//           window.removeEventListener('storage', handleInvalidToken)
//         }
//       }, [logoutAction])

//     return (
//         <div>

//         </div>
//     )
// }

// export default Adminprofile
