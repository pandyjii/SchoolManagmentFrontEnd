
import { useEffect, useState } from "react";


import './Addproduct.css'
import { useNavigate, useParams } from "react-router-dom";

function UpProduct() {

  const [Name, setName] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [gender, setgender] = useState();
  const [subject, setsubject] = useState();
  const [price, setPrice] = useState();

  //   const[Name,setName]=useState();
  // const[thumbnail,setThumbnail]=useState();
  // const[gender,setGender]=useState();
  // const[subject,setSubject]=useState();
  //   const[price,setPrice]=useState();

  const Navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    getProductList();

  }, [])


  async function getProductList() {

    console.log(param.id);

    let responce = await fetch(`http://localhost:8081/teacher/product/${param.id}`);
    responce = await responce.json();


    setName(responce.Name)
    setgender(responce.gender)
    setPrice(responce.price)
    setsubject(responce.subject)
    setThumbnail(responce.thumbnail)
    console.log(responce);


  }


  async function handleSubmit(e) {
    e.preventDefault();

    let data = await fetch(`http://localhost:8081/teacher/product/${param.id}`, {
      method: 'PUT',
      body: JSON.stringify({ Name, gender, subject, thumbnail, price }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    data = await data.json();
    console.log(data);

    Navigate('/');

  }



  return (
    <>
      <div className="AddProduct-container">

        <form className="form-containe">
          <h2 className="AddProduct-heading">Update Details</h2>

          <input type="text" value={Name} placeholder="ProductName" onChange={(e) => setName(e.target.value)} />
          <input type="text" value={thumbnail} placeholder="thumbnail" onChange={(e) => setThumbnail(e.target.value)} />
          <input type="text" value={gender} placeholder="gender" onChange={(e) => setgender(e.target.value)} />
          <input type="text" value={price} placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
          <input type="text" value={subject} placeholder="subject" onChange={(e) => setsubject(e.target.value)} />


          <button onClick={handleSubmit} className="button-class"   >Update</button>


        </form>


      </div>


    </>
  )
}



export default UpProduct