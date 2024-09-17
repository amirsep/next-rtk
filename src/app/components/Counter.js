"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter.value);

  return (
    <div className="flex flex-col justify-center items-center p-8 border border-white/30 rounded-xl shadow-xl bg-white/10 max-w-md mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl m-8">
      <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">
        Counter
      </h3>
      <button
        className=" text-2xl w-20 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-blue-600"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <div className="text-yellow-500 text-xl font-bold m-1">{counter}</div>
      <button
        className=" text-2xl w-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-pink-600"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
