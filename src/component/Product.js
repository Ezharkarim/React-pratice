import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { STATUSES } from "../store/productsSlice";


const Product = () => {
  const dispatch = useDispatch();
  const {data: products, status} = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);


  useEffect(() => {
  
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

const handleAdd = (product) => {
  dispatch(add(product));
};

if(status === STATUSES.LOADING){
  return <h2>Loading...</h2>
}

  return (
    <>
      {products.map((product) => (
        <div className="flex">
          <div className="-pointer w-[288px] h-[314px] rounded-lg drop-shadow  transition-transform transform-gpu hover:translate-y-[-5px] m-2 ">
            <div className="w-[288px] h-[192px] transition-transform transform hover:scale-105 object-cover overflow-hidden	">
              <img className="" src={product.image} alt="" />
            </div>
            <div className="flex flex-col justify-between  w-[253px] h-[88px] m-[1em] ">
              <div className="flex gap-1 items-center">
                <span className="text-[#707A83] text-[12.74px] font-bold ">
                  {product.title}
                </span>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col  w-[100px] h-[40px]">
                  <span className="text-[#707A83] bg-[#ececec]  text-[12.74px] font-bold">
                    RS: {product.price}
                  </span>
                </div>
                <div className="flex flex-col b bg-[#ececec]">
                  <button onClick={() => handleAdd(product)} className=" bg-blue-900 text-white p-2 rounded-lg	">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default Product;
