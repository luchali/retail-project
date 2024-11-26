import './WelcomePage.scss';
import { NavLink } from "react-router-dom";

function WelcomePage () {
 return (
  <div className="welcome">
    <h1 className="title">WELCOME!</h1>
    <h3>Do you want to start your business?</h3>
    <div className="welcome__buttons">
      <button className="btn btn__welcome">
      <NavLink to="/signup" className="btn__link">
        Registration
      </NavLink>
    </button>

      <button className="btn btn__welcome">
        <NavLink to="/signin" className="btn__link">
          Sign in
        </NavLink>
      </button>
    </div>
    
  </div>
 );
}

export default WelcomePage;
