import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/ProductList.scss';
import { ProductItem } from '../components/ProductItem';

const API = 'https://api.escuelajs.co/api/v1/products';

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios.get(API);
    setProducts(response.data);
  }, []);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((productItem) => (
          <ProductItem key={productItem.id} />
        ))}
      </div>
    </section>
  );
};
