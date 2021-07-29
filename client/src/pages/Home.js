import React from "react";
import { Link } from "react-router-dom";
import SignIn from "../components/SignIn";
import "./homecss.css"
//import Claendier from "../components/calendier/Claendier";
const Home = () => {
  return (
    <div className="tow">
   
     <div className="front">
     <img className="logo"
        src="http://medic-app-react.next-item.com/static/media/logo.0f801e6b.svg"
        alt="medicapp"
      />
      <h1>Login form</h1>
      <h6>Login to access your Account</h6>
      <SignIn />
      <Link to="/about">Forgot password?</Link>
<h5>Don't have an account? ! <Link to="/SignUp">Sign up</Link></h5>

   
     </div>
     <div>
      <img className="back"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfi3P2Q7vCU9Wi4W37IseaEqAFO7Hsp3PAA&usqp=CAU"
        alt="medicapp"
      />

      </div>

   
    </div>
  );
};

export default Home;
