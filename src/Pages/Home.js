import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScheduleYourOnboarding from "./ScheduleYourOnboarding/ScheduleYourOnboarding";
import ShortExplainerVideo from "./ShortExplainerVideo/ShortExplainerVideo";

const Home = () => {
  // const { setShowVideo, showVideo } = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Check if the user is already logged in and set the `isLoggedIn` state accordingly.
    // For demo purposes, we'll always assume the user is not logged in on initial load.

    setTimeout(() => {
      setIsLoggedIn(false);
    }, 0);
  }, []);

  const handleNavigate = () => {
    // Navigate to a different route
    // history.push("/dashboard");
    navigate("/dashboard");

    // throw redirect("/login");
    
  };

  const handleVideoEnd = () => {
    setShowCalendly(true);
  };

  const handleCalendlyClose = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    if (showCalendly) {
      console.log("setShowVideo true", showCalendly);

      return (
        <ScheduleYourOnboarding
          setIsLoggedIn={setIsLoggedIn}
          handleCalendlyClose={handleCalendlyClose}
          setShowCalendly={setShowCalendly}
        />
      );
    } else if (showVideo) {
      return <ShortExplainerVideo handleVideoEnd={handleVideoEnd} />;
    } else {
      setShowVideo(true);
      console.log("setShowVideo true");
    }
  } else {
    console.log("return navigate('/dashboard/reports')");
    // return navigate("/dashboard");
    return handleNavigate();
  }
};

export default Home;
