import React, { useEffect, useState } from "react";
import './login.css';
import { Link, useNavigate } from "react-router-dom";
import app from './Firebase'
import { getAuth, signInWithEmailAndPassword,  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate("/dashboard");
    }, [user, loading]);
    
    
    const SignIn = ()=> {
      signInWithEmailAndPassword (auth, email, password)
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

       const GoogleSignIn = () => {      
        signInWithPopup(auth, provider)
   .then((result) => {
     // This gives you a Google Access Token. You can use it to access the Google API.
     const credential = GoogleAuthProvider.credentialFromResult(result);
     const token = credential.accessToken;
     // The signed-in user info.
     const user = result.user;
     console.log(user)
     alert('Successfully signed In')
 
 
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
        <h1 className="title">Sign in </h1>
      <div className="main-container__content">
  <div className="content__inputs">
    <form className="content__input--form">
      <label Htmlfor="email">
        <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label Htmlfor="password">
        <input type="password" placeholder="Password"  value={password}  onChange={(e) => setPassword(e.target.value)}/>
      </label>
    </form>
  </div>

  <div class="content__submit">
    <button type="button"  onClick={ SignIn } class="button">Sign in</button>
    <p>OR</p>
    <div className="button google-button">
      <div className="google-button__google-icon"></div>
      <p className="no-select" onClick={ GoogleSignIn } >Sign in with Google</p>
    </div>
    <div className="content__submit--line"></div>
    <p>
      Don't have an account? 
      <Link to="/signup">Sign up</Link>

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

export default Login 