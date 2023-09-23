import React from 'react'
import {useForm} from 'react-hook-form'
import { schema } from '../schema/LoginShema';
import { yupResolver } from "@hookform/resolvers/yup";
import { useCounter } from "../hooks/useCounter";

const Form = () => {
    const {register, handleSubmit, formState: {error}} =useForm({
        resolver : yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    const {count, increase, decrease, reset} = useCounter();
  return (
    <>
      <div className="flex w-full h[100vh] items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex-col w-[300px] border"
        >
          <input
            type="text"
            placeholder="Full Name..."
            {...register("fullname")}
          />
          <input type="text" placeholder="Gamil..." {...register("gmail")} />
          <input type="number" placeholder="Age..." {...register("age")} />
          <input
            type="password"
            placeholder="Password..."
            {...register("password")}
          />
          <input
            type="password"
            placeholder="Confirm Password..."
            {...register("Cpassword")}
          />
          <input
            className=" bg-slate-800 text-cyan-100 w-full"
            type="submit"
            placeholder="Submmit"
          />
        </form>
      </div>
      <div className="flex w-full h[100vh] items-center justify-center">
        <span>{count}</span>
        <button className=" bg-slate-300" onClick={increase}>
          increment
        </button>
        <button className=" bg-slate-500" onClick={decrease}>
          decrement
        </button>
        <button className=" bg-slate-400" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Form