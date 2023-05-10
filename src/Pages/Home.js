import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScheduleYourOnboarding from "./ScheduleYourOnboarding/ScheduleYourOnboarding";
import ShortExplainerVideo from "./ShortExplainerVideo/ShortExplainerVideo";

const Home = () => {
  // const { setShowVideo, showVideo } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    // TODO: Check if the user is already logged in and set the `isLoggedIn` state accordingly.
    // For demo purposes, we'll always assume the user is not logged in on initial load.
    setIsLoggedIn(false);
  }, []);

  const handleVideoEnd = () => {
    setShowCalendly(true);
  };

  const handleCalendlyClose = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    if (showCalendly) {
     return <ScheduleYourOnboarding handleCalendlyClose={handleCalendlyClose} setShowCalendly={setShowCalendly}/>
    } else if (showVideo) {
     return <ShortExplainerVideo handleVideoEnd={handleVideoEnd} />;
    } else {
      setShowVideo(true);
      console.log("uswe not login");
    }
  } else {
    navigate("/dashboard/reports");
  }
};

export default Home;
