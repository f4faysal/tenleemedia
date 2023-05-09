import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] gap-5 bg-cover">
      {/* <p className='text-7xl font-thin'>L</p>
      <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-red-400'></div>
      <p className='text-7xl font-thin'>ading....</p> */}

      <span className="relative flex  ">
        <span className="relative  animate-bounce">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#40DAF4] opacity-75"></span>
          <span className="relative inline-flex rounded-full justify-center">
            {" "}
            <img
              className="w-1/2"
              src="https://tenleemedia.com/wp-content/uploads/2020/12/tenleemedia-website-logo.png"
              alt=""
            />
          </span>
        </span>
      </span>
    </div>
  );
};

export default Spinner;
