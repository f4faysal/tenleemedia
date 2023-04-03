import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] gap-5 ">
      {/* <p className='text-7xl font-thin'>L</p>
      <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-red-400'></div>
      <p className='text-7xl font-thin'>ading....</p> */}

      <span className="relative flex h-7 w-7 animate-bounce">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-7 w-7 bg-green-600"></span>
      </span>
      <span className="relative flex h-7 w-7 animate-bounce">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-7 w-7 bg-green-600"></span>
      </span>
      <span className="relative flex h-7 w-7 animate-bounce">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-7 w-7 bg-green-600"></span>
      </span>
    </div>
  );
};

export default Spinner;
