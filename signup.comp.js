
import {ref , set } from 'firebase/database';
import '../signup/signup.style.css';


import { firebaseAuth, firebasedatabase } from '../backend/firebasehandler.js';
import {  useState } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';




function Signup() {
  const [userInput ,setuserInput] = useState({
      Name:"",
      college:"",
      Department:"",
      SSLCcutoff:"",
      PUCcutoff:"",
      semester:"",
      currentCGPA:"",
      emailId:"",
      password:""
})
const nav = useNavigate();

  


  const handleClick=async()=>{
    try{
      await createUserWithEmailAndPassword(firebaseAuth, userInput.emailId ,userInput.password);
      const recordref=ref(firebasedatabase,`STUDENT_RECORDS/${userInput.Name}`);
      await set(recordref,userInput);
      alert("account created")
      
    }catch(err){
      alert(err);
      nav("\list")
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
      
      <input className='inputs' placeholder='Name' name ='Name' type={'Name'} value = {userInput.Name} onChange={handleChange} />
      <input classname='inputs' placeholder='collage' name ='college' type={'Name'} value = {userInput.college} onChange={handleChange}/>
      <input classname='inputs' placeholder='Department' name ='Dept' type={'Name'} value = {userInput.Dept} onChange={handleChange}/>
      <input classname='inputs' placeholder='SSLC %' name ='SSLCcutoff' type={'number'} value = {userInput.SSLCcutoff} onChange={handleChange}/>
      <input classname='inputs' placeholder='PUC %' name ='PUCcutoff' type={'number'} value = {userInput.PUCcutoff} onChange={handleChange}/>
      <input classname='inputs' placeholder='semester' name ='sem' type={'number'} value = {userInput.sem} onChange={handleChange}/>
      <input classname='inputs' placeholder='currentCGPA' name ='CGPA' type={'number'} value = {userInput.CGPA} onChange={handleChange}/>
      <input className='inputs' placeholder='Email Id' name ='emailId' type={'email'} value = {userInput.emailId} onChange={handleChange} />
      <input classname='inputs' placeholder='Password' name ='password' type={'password'} value = {userInput.password} onChange={handleChange}/>
      


 <button className = "SUMIT" onClick={handleClick}  >sign Up</button>
    </div>
   
  );
}

export default Signup;