import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart2() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  /*
  Another approach using expression instead of statement
  and more parameters:

   function handleIncreaseClick(productId, productName, productCount) {
    const nextProducts = products.map((p) => {
      if (p.id === productId) {
        return {
          ...p,

          //changing products.name by the parameter called productName

          name: "delicious " + productName,

          //another aproach to change products.count without using parameter 

          count: p.count + 1
      };
    }
      else {
        return p;
    }});
    setProducts(nextProducts);
  }
  */

  function handleDeleteClick(productId){
    const deleteProducts = products
    .map(product => {
      if (product.id === productId){
        return {
          ...product,
          count: product.count - 1
        };
      } 
      else {
        return product;
      }
    })
    .filter(product => product.count > 0);

    setProducts(deleteProducts);
  }

  /*
  Another approach:
  function handleDecreaseClick(productId) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter(p =>
      p.count > 0
    );
    setProducts(nextProducts)
  }
  */

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id, product.name, product.count);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDeleteClick(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
