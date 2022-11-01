import React from 'react';
import app from './Firebase'
import { getAuth, signOut } from "firebase/auth";


const Dashboard = () => {
  const auth = getAuth(app);

  const logout= () => {
  signOut(auth).then(() => {
    console.log('Signed Out Successfully');
  }).catch((error) => {
    console.error('Sign Out Error', error);
  })}

  return (
    <div>
 <button onClick={logout}>Logout</button>

    </div>
  )
}

export default Dashboard 