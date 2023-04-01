import React, { useState } from 'react';
import "./Login.css";
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {

  const [name , setName] = useState("") ;
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [profilePic , setProfilePic] = useState("") ;
  const dispatch = useDispatch();


const loginToApp = (e) =>  {
        e.preventDefault() ;
        
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => { 
          dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl : userAuth.user.photoURL,
          }))
        }).catch(error => alert(error));
};

  
  const register = () => {
     if(!name){
      return alert("Please Enter Your Name");
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth) =>{
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        }))
      })
    } ).catch(error => alert(error));
    };


  return (
    <div className='login'>
        <img src='https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png' alt='LinkedIn' />
        <form>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' type="text" />
            <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile Pic Url' type="text" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' type='password' />
            <button type='Submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member ? <span className='login_Register' onClick={register}>Register Now !</span></p>

    </div>
  );
}

export default Login;