"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  function Decrement(){
    if(count > 0){
      setCount(count - 1);
    }
    console.log("decrement 1");
  }
  function Increment(){
    setCount(count + 1);
    console.log("increment 1");
  }
  function Reset(){
    setCount(0);
    console.log("reset");
  }
  return (
    <div className="bg-gradient-to-tr  from-[#A770EF] via-[#CF8BF3] to-[#FDB99B]">
    <div className=" flex h-screen flex-col justify-around items-center text-gray-200">
      <h1 className="text-3xl sm:text-5xl tracking-tighter font-mono">Count:{count}</h1>
      <div className="flex gap-12 justify-between items-center">
        <button onClick={Decrement} className="text-2xl border border-gray-200 rounded-full p-2 hover:border-gray-200 hover:bg-gray-200 active:bg-gray-300 active:border-gray-300 active:outline-none hover:text-gray-500 active:text-black shadow-inner">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
        </button>
        <button onClick={Reset} className="text-2xl border border-gray-200 rounded-full p-2 hover:border-gray-200 hover:bg-gray-200 active:bg-gray-300 active:border-gray-300 active:outline-none hover:text-gray-500 active:text-black shadow-inner">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        </button>
        <button onClick={Increment} className="text-2xl border border-gray-200 rounded-full p-2 hover:border-gray-200 hover:bg-gray-200 active:bg-gray-300 active:border-gray-300 active:outline-none hover:text-gray-500 active:text-black shadow-inner">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        </button>
      </div>
    </div>
      <p className="text-gray-200 p-2 text-center absolute bottom-0 ">Build with ❤️ by Muhammad Shoaib</p>
    </div>
  );
}
