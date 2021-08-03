import React, { useState } from "react";
import {Redirect, Route , useHistory} from "react-router-dom"
import { Form, Input, Button, Checkbox } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../redux/actions/action";

import isAuth from '../components/isAuth'




const SignIn = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
const {token , id} = useSelector(state => state)
  console.log(token)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const history = useHistory()
  
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(login({  email, password }, history));

  };
  
    //const token = localStorage.getItem('token');
    //console.log(token)
 

  return (

<div>
    {
        
    
    <Form 
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
        onChange={(e) => setEmail(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        onChange={(e) => setPassword(e.target.value)}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={handelSubmit}>
          Submit 
        </Button>
        {/* <Route path="/dashboard" render={() => (isAuth() ? <Redirect to={`/Adminprofile/${id}`} /> : ("nothing"))} /> */}
        {/* (token.role === "patient" )  ? ( <Redirect to={`/Patientprofile/${id}`} />  )                
       : (token.role === "doctor" ) ?( <Redirect to={`/Doctorprofile/${id}`} />)            
           : ( token.role === "Admin") ? (<Redirect to ={`/Adminprofile/${id}`} />  
         ): ("nothing")   */}
      </Form.Item>
 
     
    </Form>
    }
    </div>
  
    
  )
};

export default SignIn;
