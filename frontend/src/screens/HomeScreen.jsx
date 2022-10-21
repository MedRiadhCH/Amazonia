import React, { useContext } from 'react';
import { DataContext } from '../Data';
import Product from '../components/Product';

const HomeScreen = () => {
  const {data}=useContext(DataContext)
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
