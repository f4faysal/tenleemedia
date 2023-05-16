import React from "react";
import { InlineWidget } from "react-calendly";

function ScheduleYourOnboarding({
  setShowCalendly,
  handleCalendlyClose,
  setIsLoggedIn,
}) {
  // const handleDateSelected = (date) => {
  //   console.log("Selected date:", date);
  // };

  return (
    <div>
      <h1 className="text-2xl text-blue-500">Schedule Your Onboarding</h1>
      <InlineWidget
        url="https://calendly.com/development-sf/30min"
        styles={{ height: "800px" }}
        // onDateAndTimeSelected={handleDateSelected}
        onLoad={() => setShowCalendly(false)}
        // onClose={handleCalendlyClose}
      />
      <button className="btn" onClick={() => setIsLoggedIn(true)}>
        {" "}
        Close Calendly{" "}
      </button>
    </div>
  );
}

export default ScheduleYourOnboarding;
