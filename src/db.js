const dataBase = {products: []};

const saveProduct = (name, price) => {
  dataBase.products.push({id: Date.now(), name, price})
  localStorage.setItem('db', JSON.stringify(dataBase))
}

const getProducts = () => {
  
  const str = localStorage.getItem('db')
  const all = JSON.parse(str)
  return all?.products || [];
}

const removeProduct = (id) => {
  const newProducts = dataBase.products.filter(
    (item) => {
      return id !== item.id 
    }
  );

  const newDataBase = {
    ...dataBase,
    products: newProducts
  }

  dataBase.products = newProducts;

  localStorage.setItem('db', JSON.stringify(newDataBase))

  return newProducts
}

export {
  saveProduct,
  getProducts,
  removeProduct
}
