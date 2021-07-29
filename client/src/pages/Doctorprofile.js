import React from 'react'
import {useEffect} from 'react-redux'
import { logoutAction } from '../redux/actions/action'
import  history from '../redux/actions/action'

const Doctorprofile = () => {
    useEffect(() => {
        const handleInvalidToken = e => {
          if (e.key === 'token' && e.oldValue && !e.newValue) {
            // Your logout logic here
    
            console.log(e)
            logoutAction(history);
    
          }
        }
        window.addEventListener('storage', handleInvalidToken)
        return function cleanup() {
          window.removeEventListener('storage', handleInvalidToken)
        }
      }, [logoutAction])

    return (
        <div>
            <h1>hi i am doctor</h1>
        </div>
    )
}

export default Doctorprofile
