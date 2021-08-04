import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Form, Input, DatePicker, Switch, Button, Radio, } from 'antd';
import CalendarView from './CalendarView';
import 'antd/dist/antd.css';
import '../../index.css';
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import {Alert,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



const AppointmentForm = (props) => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    email: '',
    firstName: '',
    lastName: '',
    slotTime: '',
    slotDate: ''
  })
  const [AM, setAM] = useState(true);
  const [error, setError] = useState('')

  const slotsAM = ['8:00-9:00', '9:00-10:00', '10:00-11:00', '11:00-12:00'];
  const slotsPM = ['1:00-2:00', '2:00-3:00', '3:00-4:00', '4:00-5:00'];
 

  const changeHandler = event => {
    setError('');
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const switchHandler = () => {
    setError('');
    setAM(!AM);
  }

  const dateHandler = (date) => {
    setError('');
    setInput({
      ...input, 
      slotDate: date
    })
  }

  const validateInput = () => {
    if (!input.email || !input.firstName || !input.lastName || !input.slotTime || !input.slotDate) {
      setError('All fields are required');
      return false;
    } else {
      return true;
    }
  }

  const submitHandler = event => {
    event.preventDefault();
    if (validateInput()) {
      axios.post("/appointments/", input)
        .then(response => {
          console.log('success adding appointment:', response);
          setShow(true);
          setInput({
            email: '',
            firstName: '',
            lastName: '',
            slotTime: '',
            slotDate: ''
          })
          // props.history.push('/');
        })
        .catch(error => {
          console.log('error adding appointment:', error);
        })
    }
  }


  




  return (
    
    <div>
      <div style={{margin:"10%"}}><CalendarView/></div>
       <div style={{marginLeft:"30%"}}>
    <Form className='appt-form' onSubmit={submitHandler}>
      <Input name='email' value={input.email} placeholder='Email' onChange={changeHandler} />
      <Input name='firstName' value={input.firstName} placeholder='First name' onChange={changeHandler} />
      <Input name='lastName' value={input.lastName} placeholder='Last name' onChange={changeHandler} />
      <Switch checkedChildren="AM" unCheckedChildren="PM" defaultChecked onChange={switchHandler}/>
      {AM ? (
        <Radio.Group name='slotTime' value={input.slotTime} onChange={changeHandler}>
          {slotsAM.map(item => <Radio key={item} value={`${item} AM`}>{`${item} AM`}</Radio>)}
        </Radio.Group>
      ) : (
        <Radio.Group name='slotTime' value={input.slotTime} onChange={changeHandler}>
          {slotsPM.map(item => <Radio key={item} value={`${item} PM`}>{`${item} PM`}</Radio>)}
        </Radio.Group>
      )}
      <DatePicker onChange={dateHandler}/>
      {error && <div>{error}</div>}
      <Button onClick={submitHandler}>Submit</Button>
    </Form>
    </div>
    <Alert show={show} variant="success">
        <Alert.Heading>OPERATION SUCCESSFULY DONE!</Alert.Heading>
        <p>
         your appointment is successfuly reqistred.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}

    </div>
   
   
  )
}

export default withRouter(AppointmentForm);