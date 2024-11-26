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
    <div>
      <form>
        <h2>Log in</h2>
        <input 
          placeholder="Please enter your email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          type="email" 
        />
        <input 
          placeholder="Please enter your password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          type="password" 
        />
        
        <button onClick={logIn}>Log in</button>
        
        {error ? <p style={{color: "red"}}>{error}</p> : ""}
      </form>
      <button>
      <NavLink to="/welcomepage">
        Come back to Welcome page
      </NavLink>
      </button>
    </div>
  )
}

export default SignIn;
