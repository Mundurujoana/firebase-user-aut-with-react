import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';
import { useUserAuth } from "../context/UserAuthContext";
import { addDoc, collection, } from "firebase/firestore";
import { db } from '../Firebase'



const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    location: ""
  })
  const [error, setError] = useState("")
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(formData.email, formData.password,);
      saveData()
      alert("registered successfully")
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  const saveData = () => {
  //make a request to the database to save data
  addDoc(collection(db,"users"),formData)
  .then(()=>{
   console.log("users saved successfully")
   })
   .catch(error => console.log(error))
   }

   


  return (
    <div className='main-container'>
    {/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
    <h1 className="title">Sign up </h1>
    {error && <p className='errors'>{error}</p>}
<div className="main-container__content">
  <div className="content__inputs">
    <form className="content__input--form" >
    <label Htmlfor="username">
        <input type="username" placeholder="username"  value={formData.username} onChange={(e) => setFormData({...formData,username:e.target.value})} />
      </label>
      <label Htmlfor="email">
        <input type="email" placeholder="Email"  value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})} />
      </label>
      <label Htmlfor="password">
        <input type="password" placeholder="Password"  value={formData.password}  onChange={(e) => setFormData({...formData,password:e.target.value})}/>
      </label>
      <label Htmlfor="location">
        <input type="location" placeholder="Location"  value={formData.location} onChange={(e) => setFormData({...formData,location:e.target.value})} />
      </label>
    </form>
  </div>

  <div className="content__submit">
    <button type="button" onClick={ handleSubmit }  className="button">Sign up</button>
    {/* <p>OR</p>
    <div className="button google-button">
      <div className="google-button__google-icon"></div>
      <p className="no-select" onClick={ handleGoogleSignIn } >Sign up with Google</p>
    </div> */}
    <div className="content__submit--line"></div>
    <p>
      Already have an account? 
      <Link  className="link" to="/">Log In</Link>
    </p>
    <div className="content__footer">
      <p>
        By clicking "Sign up" button above you agree to our
        <a href="/">
          <strong>terms of use</strong>
        </a>
        </p>
    </div>
  </div>
</div>
</div>
  )
}

export default Signup