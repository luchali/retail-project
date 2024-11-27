import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNavigate, useLocation } from "react-router-dom";

const publicPages = ['/signin', '/signup']
const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate(); // Ініціалізація useNavigate
  const location = useLocation();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if(user) {
        setAuthUser(user);
        if (!authUser) {
          navigate("/mainpage");
        }
        
      } else {
        setAuthUser(null);

        if (!publicPages.includes(location.pathname)){
          navigate("/welcomepage");
        }
        
      }
    });
    return () => {
      listen()
    }
  }, [navigate])

  function userSignOut(){
    signOut(auth)
    .then(() => console.log("success"))
    .catch((e) => console.log(e));
  }

  return (
    <div>
      {authUser ? (
        <div>
          <p>{`Signed in as ${authUser.email}`}</p> 
          <button onClick={userSignOut} className="btn__form">Sign Out</button>
        </div>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  )
}

export default AuthDetails
