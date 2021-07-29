import {BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import SignUp from './components/SignUp';
import "antd/dist/antd.css";
import Home from './pages/Home';
import calender from './components/calendier/calender';
import AppointmentForm from './components/calendier/AppointmentForm';
import Adminprofile from './pages/Adminprofile';
import Doctorprofile from './pages/Doctorprofile';
import Patientprofile from './pages/Patientprofile';
//import SignIn from './components/SignIn';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
     
      <Route exact path="/" component= {Home}/>
<Route  path="/SignUp" exact render= {(props)=> <SignUp/>}/>
<Route exact path="/SignIn" render= {(props)=> <Home/>}/>
<Route exact path="/calender" component={calender}/>
<Route exact path='/create-appt' component={AppointmentForm} />
<Route  path="/Adminprofile" component={Adminprofile}/>
<Route exact path="/Patientprofile" component={Patientprofile}/>
<Route exact path="/Doctorprofile" component={Doctorprofile}/>  
<Route exact path="/SignIn" component={SignUp}/>  
    </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
