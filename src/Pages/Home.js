import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Login/Logo";

const Home = () => {
  return (
    <div className="bg-[url('https://tenleemedia.com/wp-content/uploads/2021/07/tenleemedia-slide.jpg')] h-screen flex justify-center bg-cover">
      <Logo />

      <div>video plyer then</div>

      <Link className="btn btn-info" to={"/dashboard/reports"}>dashboard</Link>
    </div>
  );
};

export default Home;
