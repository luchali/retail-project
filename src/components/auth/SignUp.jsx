import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");

  function register(e) {
    e.preventDefault();
    if (copyPassword !== password) {
      setError("Passwords didn`t match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setCopyPassword("");
        setPassword("");
      }
    ).catch((error) => console.log(error));

  }

  return (
    <div className="sign-up">
      <form onSubmit={register} className="form">
        <h2>Create an account</h2>
        <div className="form__inputs">
        <input 
        className="form__inputs__item"
          placeholder="Please enter your email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          type="email" 
        />
        <input 
        className="form__inputs__item"
          placeholder="Please enter your password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          type="password" 
        />
        <input 
        className="form__inputs__item"
          placeholder="Repeat your password "
          value={copyPassword} 
          onChange={(e) => setCopyPassword(e.target.value)} 
          type="password" 
          />
        <button className="btn__form">Create</button>
        
        {error ? <p style={{color: "red"}}>{error}</p> : ""}  
        </div>
        
      </form>
      <button className="btn">
      <NavLink to="/welcomepage" className="btn__link">
        Come back to Welcome page
      </NavLink>
      </button>
    </div>
  )
}

export default SignUp
