import React from 'react';
import "./dashboard.css";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";


const Dashboard = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='dash-body'>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
 <button className='dash-btn' onClick={handleLogout} >Logout</button>

    </div>
  )
}

export default Dashboard 


 