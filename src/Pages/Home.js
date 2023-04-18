import React from "react";
import VideoAddModal from "./VideoAdd/VideoAddModal";

const Home = () => {
  return (
    <div className=" h-screen flex justify-center items-center bg-cover">
      <div>
        <VideoAddModal />
      </div>
    </div>
  );
};

export default Home;
