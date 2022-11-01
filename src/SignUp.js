import React, { useState } from 'react';
import './signup.css';
import { Link } from "react-router-dom";
import app from './Firebase'
import { getAuth, createUserWithEmailAndPassword,  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
 
const SignUp = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

  
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, seterror] = useState("");

    
      const SignUpp= () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          alert('This user has successfully signed in')
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
         alert(errorCode)
        });
       }

       const handleSubmit = (e) => {
        e.preventDefault();
        setUsername("");
        setEmail("");
        setPassword("");
        const res = SignUpp(email, password);
        if (res.error) seterror(res.error);
        };
       

    
    const GoogleSignIn = () => {      
       signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    alert('Successfully created Your account')


  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
  
    console.logo(errorCode)
  })
}
       

  return (
    <div className='main-container'>
    {/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
    <h1 className="title">Sign up </h1>

<div className="main-container__content">
  <div className="content__inputs">
    <form className="content__input--form"  onSubmit={handleSubmit} >

      <label Htmlfor="username">
        <input type="text" placeholder="Username"  value={username}
          onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label Htmlfor="email">
        <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label Htmlfor="password">
        <input type="password" placeholder="Password"  value={password}  onChange={(e) => setPassword(e.target.value)}/>
      </label>
    </form>
  </div>

  <div className="content__submit">
    <button type="button" onClick={SignUpp} className="button">Sign up</button>
    <p>OR</p>
    <div className="button google-button">
      <div className="google-button__google-icon"></div>
      <p className="no-select" onClick={ GoogleSignIn } >Sign up with Google</p>
    </div>
    <div className="content__submit--line"></div>
    <p>
      Already have an account? 
      <Link to="/">Sign in</Link>
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

export default SignUp