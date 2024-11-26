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
    <div>
    <h1>Products count: {products?.length}</h1>
    
    <NavLink to="/addproduct">
      <p>lalslsl</p>
    </NavLink>
    <ul>
      {products?.map((item) => (
        <li key={item.id}>{item.name}~{item.price}
        <button onClick={() => handleDelete(item.id)}>-</button>
        </li>
        ))}
    </ul>
    
    </div>


  );
}

export default CatalogPage