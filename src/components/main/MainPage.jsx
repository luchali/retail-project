import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  
  return (
    <div className="main">
      <h1>Welcome to Main page</h1>

      <div className="main__categories">
        <NavLink to="/catalogpage">
          <div className="main__categories__item main__categories__item--catalog">
            <h3 className="main__categories__item__title">Manage your catalog of products</h3>
          </div>
        </NavLink>

        <NavLink to="/generatepage">
          <div className="main__categories__item main__categories__item--adslink">
            <h3 className="main__categories__item__title">Generate link of product for ads</h3>
          </div>
        </NavLink>
        
      </div>
    </div>
  );
}

export default MainPage;
