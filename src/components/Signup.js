import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';
import { useUserAuth } from "../context/UserAuthContext";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }



  return (
    <div className='main-container'>
    {/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
    <h1 className="title">Sign up </h1>
    {error && <p className='errors'>{error}</p>}
<div className="main-container__content">
  <div className="content__inputs">
    <form className="content__input--form"  onSubmit={handleSubmit} >
      <label Htmlfor="email">
        <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label Htmlfor="password">
        <input type="password" placeholder="Password"  value={password}  onChange={(e) => setPassword(e.target.value)}/>
      </label>
    </form>
  </div>

  <div className="content__submit">
    <button type="button" className="button">Sign up</button>
    {/* <p>OR</p>
    <div className="button google-button">
      <div className="google-button__google-icon"></div>
      <p className="no-select" onClick={ handleGoogleSignIn } >Sign up with Google</p>
    </div> */}
    <div className="content__submit--line"></div>
    <p>
      Already have an account? 
      <Link to="/">Log In</Link>
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