import React from 'react'
import {useDispatch , useSelector } from 'react-redux';
import {remove} from '../store/cartSlice';

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <div>Cart</div>
      <div className="flex flex-wrap ">
        {products.map((product) => (
          <div key={product.id} className="flex">
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
                    <button
                      onClick={() => handleRemove(product.id)}
                      className=" bg-blue-900 text-white p-2 rounded-lg	"
                    >Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card