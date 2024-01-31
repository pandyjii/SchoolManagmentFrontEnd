import { useState } from "react";


import './Addproduct.css'
import { useNavigate } from "react-router-dom";
// import { json } from "react-router-dom";
function AddProduct(){

    const[Name,setName]=useState();
    const[thumbnail,setThumbnail]=useState();
    const[gender,setGender]=useState();
    const[subject,setSubject]=useState();
      const[price,setPrice]=useState();
                        
      const[error,setError]=useState(false);

      const Navigate=useNavigate();

      
   
  
 async function handleSubmit(e){
  e.preventDefault();
  
  if(!price || !subject|| !thumbnail|| !Name|| !gender){
  
    setError(true);
    
        
}

  const userId=JSON.parse(localStorage.getItem('user'));
  console.log(userId._id);

  const url='http://localhost:8081/teacher/add';

  let responce=await fetch(url,{
   
    method:'POST',
    body:JSON.stringify({price,subject,thumbnail,Name,gender}),
    headers:{
        'Content-Type':'application/json'
    }


  })

  responce=await responce.json();
  console.log(responce);
  Navigate('/')
   

//   console.log(values);
}
     


    return(
        <>

        <div className="AddProduct-container">

        <form className="form-containe">
        <h2 className="AddProduct-heading">Add Product</h2>

        <input type="text"  value={Name}  placeholder="Name"         onChange={(e)=>setName(e.target.value)} />
            {error&& !Name&&<span className="validation">This field is required</span> }
            <input type="text"   value={thumbnail}   placeholder="thumbnail"     onChange={(e)=>setThumbnail(e.target.value)}  />
            {error&& !thumbnail&&<span className="validation"  >This field is required</span> }
            <input type="text"   value={gender}    placeholder="gender"   onChange={(e)=>setGender(e.target.value)}  />
            {error&& !subject&&<span  className="validation"   >This field is required</span> }
            <input type="text"    value={price}    placeholder="Fees"    onChange={(e)=>setPrice(e.target.value)}  />
            {error&& !price&&<span>This field is required</span> }
            <input type="text"    value={subject}    placeholder="Subject"    onChange={(e)=>setSubject(e.target.value)}  />
            {error&& !subject&&<span  className="validation"  >This field is required</span> }

 
       <button onClick={handleSubmit} className="button-class"   >Submit</button>
        
  
       

        </form>
       
       
        </div>
       

        </>
    )
}

export default AddProduct;