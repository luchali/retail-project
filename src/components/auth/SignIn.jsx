import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function logIn(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
      }
    ).catch((error) => 
      console.log(error),
      setError("Sorry couldn`t find your account...")
    );

  }

  return (
    <div className="sign-in">
      <form className="form">
        <h2>Log in</h2>
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
        
        <button className="btn__form" onClick={logIn}>Log in</button>
        
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

export default SignIn;
