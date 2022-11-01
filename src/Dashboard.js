import React from 'react';
import app from './Firebase'
import { getAuth, signOut } from "firebase/auth";
import "./dashboard.css";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const auth = getAuth(app);

  const logout= () => {
  signOut(auth).then(() => {
    console.log('Signed Out Successfully');
    alert('You have been signed out')
  }).catch((error) => {
    console.error('Sign Out Error', error);
  })}

  return (
    <div className='dash-body'>
 <button className='dash-btn' onClick={logout}>Logout</button>
 <Link  className='dash-btn1' to="/">Go back</Link> 

    </div>
  )
}

export default Dashboard 