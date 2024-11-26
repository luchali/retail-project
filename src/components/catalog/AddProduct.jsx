import { useState } from "react";
import {saveProduct} from '../../db';
import { useNavigate } from "react-router-dom";


function AddProduct (){
  const [name, setName] = useState("");
  const [price, setPrice] =  useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // if (copyPassword !== password) {
    //   setError("Passwords didn`t match");
    //   return;
    // }

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((user) => {
    //     console.log(user);
    //     setError("");
    //     setEmail("");
    //     setCopyPassword("");
    //     setPassword("");
    //   }
    // ).catch((error) => console.log(error));

    if(price > 0 && name.length >=3 ) {
      saveProduct(name, price);
      navigate("/catalogpage");
    } else {
      alert("Error try again to add product");
    }

  }

  return(
  <form onSubmit={handleSubmit}>
    <label >Product name</label>
    <input 
    type="text" 
    placeholder="Write product`s name"
    required
    value={name}
    onChange={(e) => setName(e.target.value)} 
    />
    <label>Price</label>
    <input 
    type="number" 
    placeholder="Write product`s price"
    required
    value={price}
    onChange={(e) => setPrice(e.target.value)} 
    ></input>
    <button>Add</button>
  </form>
);
  
}

export default AddProduct
