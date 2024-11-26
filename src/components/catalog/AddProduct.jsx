import { useState } from "react";
import {saveProduct} from '../../db';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
    <div className="addproduct">
      <h1 className="addproduct__title">Adding product to catalog</h1>
<form onSubmit={handleSubmit} className="addproduct__form">
    <label >Product name</label>
    <div className="addproduct__form__inputs">
    <input 
    type="text" 
    placeholder="Write product`s name"
    required
    className="addproduct__form__inputs__item"
    value={name}
    onChange={(e) => setName(e.target.value)} 
    />
    <label>Price</label>
    <input 
    type="number" 
    placeholder="Write product`s price"
    required
    value={price}
     className="addproduct__form__inputs__item"
    onChange={(e) => setPrice(e.target.value)} 
    ></input>
    <button className="btn__form">Add</button>
    </div>
   
  </form>

    <button className="btn">
      <NavLink to="/catalogpage" className="btn__link">
        Come back to catalog page
      </NavLink>
      </button>
    </div>
  
  
);
  
}

export default AddProduct
