// import './WelcomePage.scss';
import { NavLink } from "react-router-dom";

function WelcomePage () {
 return (
  <div>
    <h1>WELCOME!</h1>
    <h3>Do you want to start your business?</h3>
    <button>
      <NavLink to="/signup">
        Registration
      </NavLink>
    </button>

    <button>
      <NavLink to="/signin">
        Sign in
      </NavLink>
    </button>
  </div>
 );
}

export default WelcomePage;
