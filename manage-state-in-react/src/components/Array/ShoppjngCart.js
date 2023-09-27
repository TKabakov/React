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

  function handleIncreaseClick(productId, productCount) {
    const nextProducts = products.map((product, count) => {
      if (product.id === productId ) {
        return {
          ...product, count: productCount + 1
      };
    }
      else {
        return product;
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
            handleIncreaseClick(product.id, product.count);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
