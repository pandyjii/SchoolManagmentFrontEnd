import { useState } from "react";
import './StudentSinupLogin.css'
import { useNavigate } from "react-router-dom";



function StudentLogin() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  //    const[name,setName]=useState();

  console.log("email.password", email, password)

  const Navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    if (email && password) {
      const url = 'http://localhost:8081/student/login';
      let responce = await fetch(url, {

        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        }

      }

      )
      responce = await responce.json();
      if(responce){
        localStorage.setItem("user", JSON.stringify(responce.User));
        Navigate('/');
      }
     
    }

    else{
      alert("write a both  email& password")
    }

}

 function handleSinup(){
  Navigate('/sinups')
 }

return (

  <div className='Sinup-container'>
      
        <form   className='container' >
        <h2 className='teacher-heading'>LogIn(Student)</h2>
        <div className='input'>
            <input     type='email' placeholder='Email' onChange={(e) => setEmail (e.target.value)} />
           
            <input  type='password' placeholder='password'  onChange={(e) =>  setPassword(  e.target.value)} />
            <button className='teacher-submit'  onClick={handleClick} >Submit</button>
            </div>
        </form>
        <div className='login-student'>
            <p>I don't have accound?<span onClick={handleSinup}>Sinup</span></p>
        </div>
        </div>
)
}

export default StudentLogin;