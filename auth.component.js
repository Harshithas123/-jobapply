//import './Pages/Authpage/Auth.styles.css';
import {ref , set } from 'firebase/database';


import { async } from '@firebase/util';

import { createUserWithEmailAndPassword} from 'firebase/auth';
import { firebaseAuth } from '../../backend/firebasehandler';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Authpage() {
  const [userInput ,setuserInput] = useState({emailId:"",password:""})
  const nav =useNavigate();


  const handleClick=async()=>{
    try{
      await createUserWithEmailAndPassword(firebaseAuth, userInput.emailId ,userInput.password);
      alert("acount created")
      
    }catch(err){
      alert(err);
      nav("/jobdetail")
    }
  }

  const handleChange =(event) => {
    const {name , value }=event.target;

    setuserInput({
      ...userInput,
      [name]:value
    })
  }
  return (
    <div className='data'>
      <input className='inputs' placeholder='Email Id' name ='emailId' type={'email'} value = {userInput.emailId} onChange={handleChange} />
      <input classname='inputs' placeholder='Password' name ='password' type={'password'} value = {userInput.password} onChange={handleChange}/>

 <button onClick={handleClick}>create account</button>
    </div>
   
  );
}

export default Authpage;