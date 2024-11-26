import { NavLink } from "react-router-dom";
import {getProducts, removeProduct} from "../../db";
import { useState } from "react";

function CatalogPage () {
  const [products, setProducts] = useState(getProducts())

  const handleDelete = (id) => {
    const newProducts = removeProduct(id);
    setProducts(newProducts);
  }


  console.log(products)

  return ( 
    <div className="catalog">
    <h1>Products count: {products?.length}</h1>
    
    <NavLink to="/addproduct" className="btn__form">
      <p>Add product</p>
    </NavLink>
    <ul>
      {products?.map((item) => (
        <li key={item.id}>{item.name}~{item.price}
        <button onClick={() => handleDelete(item.id)}>-</button>
        </li>
        ))}
    </ul>
    
    <button className="btn">
      <NavLink to="/mainpage" className="btn__link">
        Come back to main page
      </NavLink>
      </button>
    </div>


  );
}

export default CatalogPage