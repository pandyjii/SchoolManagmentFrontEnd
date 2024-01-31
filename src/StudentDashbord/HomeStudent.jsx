import { useEffect, useState } from "react";
import './Product.css';
import { Link } from "react-router-dom";

function Product(){

    const[product,setProduct]=useState([]);
   



   
       

       const AllProduct= async()=>{

        let responce= await fetch('http://localhost:8081/student/',{

        })

        responce=await responce.json();
        setProduct(responce);
       

       }
       console.log(product)

   

    async function handleClick(id){
      

      let responce= await fetch(`http://localhost:8081/student/${id}`,{
        method:'DELETE'
      })

      responce= await responce.json();
      AllProduct();
      console.log(responce);
       }
    

    useEffect(()=>{

        AllProduct();

    },[])




  
     


    

    return(
        <>

  <div className="product-heading">
       
         <ul className="product-ul" >
           
            <li>Name</li>
            <li>Gender</li>
            <li>Fees</li>
            <li>Subject</li>
            <li>Action</li>

         </ul>
         </div>
         <hr/>
            
        
           
             {
            product.length>0?    
                product.map(item=>
                <>
                <div className="product-details">
            <ul className="product">
         <li className="imgs"><img  src={item.thumbnail} className="product-thumbnail"/></li>  
            <li>{item.Name}</li>
            <li>{item.gender}</li>
            <li>{item.price}</li>
            <li>{item.subject}</li>
           
           <li className="Action" > <button onClick={()=>handleClick(item._id)} className="delete"><i class="fa-solid fa-trash"></i></button> 
          <button className="edit"><Link  to={'/update/'+item._id}   ><i class="fa-solid fa-pen"></i></Link></button> 
           
           </li>

            </ul>
              </div>
              <hr/>
            </>

                ):
                <h1 className="sreach-input">Value is not fount</h1>
             }
           
        


        </>
    )
}

export default Product;