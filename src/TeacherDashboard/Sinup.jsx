
import { useState } from 'react';
import './TeacherLoginSinup.css'
import { useNavigate } from 'react-router-dom';



function Sinup() {
const[name,setName]=useState({})
const[email,setEmail]=useState({})
const[password,setpassword]=useState({})
const Navigate=useNavigate();

async  function handleSubmit(e){
    e.preventDefault();
    
    let url='http://localhost:8081/teacher/';
    
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
    Navigate('/logint');
}
else{
    alert("responce come properly")
}
   


}

function handleLogin(){
    Navigate('/logint')
}


    return (
        <>
         <div className='Sinup-container'>
      
      <form   className='containers' >
      <h2 className='teacher-heading'>SinUp(Teacher)</h2>
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

export default Sinup;