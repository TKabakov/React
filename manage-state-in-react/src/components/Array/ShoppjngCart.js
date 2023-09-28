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

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId, productName) {
    const nextProducts = products.map((p) => {
      if (p.id === productId ) {
        return {
          ...p,
          //changing products.name by parameter productName
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
            handleDecreaseClick(product.id);
          }}>
          -
          </button>
        </li>
      ))}
    </ul>
  );
}
