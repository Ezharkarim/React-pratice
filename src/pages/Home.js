import React from 'react';
import Product from '../component/Product';
const Home = () => {
  return (
    <>
      <h1 className=" text-4xl text-center">Redux Tool kit home page</h1>

        <div className="flex flex-wrap items-center">
          <Product />
        </div>
     
    </>
  );
}

export default Home