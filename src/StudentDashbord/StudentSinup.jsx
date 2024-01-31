
import { useState } from 'react';

import './StudentSinupLogin.css'
import { useNavigate } from 'react-router-dom';
import StudentLogin from './StudentLogin';



function StudentSinup() {
const[name,setName]=useState({})
const[email,setEmail]=useState({})
const[password,setpassword]=useState({})
const Navigate=useNavigate();

async  function handleSubmit(e){
    e.preventDefault();
    
    let url='http://localhost:8081/student/';
    
   let responce= await fetch(url,{
    method:'POST',
    body:JSON.stringify({name,email,password}),

    headers:{
    "Content-type":"application/json"
    }
    
     
   }
   ) 
  
   responce= await responce.json();

if(responce){
    Navigate('/logins');
}
else{
    alert("responce not come properly")
}
  


}

 function handleLogin(){
    Navigate('/logins')
 }


    return (
        <>
        <div className='Sinup-container'>
      
        <form   className='container' >
        <h2 className='teacher-heading'>SinUp(Student)</h2>
        <div className='input'>
            <input    type='text' placeholder='name' onChange={(e) => setName( e.target.value)} />
           
            <input     type='email' placeholder='Email' onChange={(e) => setEmail (e.target.value)} />
           
            <input  type='password' placeholder='password'  onChange={(e) =>  setpassword(  e.target.value)} />
            <button className='teacher-submit'  onClick={handleSubmit} >Submit</button>
            </div>
          
        </form>

        <div className='login-student'>
            <p>I have accound?<span onClick={handleLogin}>Login</span></p>
        </div>
       
        </div>
       
       

       </>

    )
}

export default StudentSinup;