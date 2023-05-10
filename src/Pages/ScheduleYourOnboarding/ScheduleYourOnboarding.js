import React from "react";

const ScheduleYourOnboarding = ({setShowCalendly , handleCalendlyClose}) => {
  return (


    <div>
          {/* <iframe
            src="https://calendly.com/d/z57-w3z-9mk/30-minute-meeting"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            onLoad={() => setShowCalendly(false)}
            
          /> */}

          <button
            className="btn"
            onClick={() => handleCalendlyClose()}
            // onLoad={() => setShowCalendly(false)}
          >
            {" "}
            Close ShowCalendly{" "}
          </button>
        </div>

    // <div>
    //   <div>
    //     <div>ScheduleYourOnboarding </div>
    //     <button className="btn" onClick={() => setIsLoggedIn(true)}>
    //       {" "}
    //       Video 
    //     </button>
    //   </div>
    // </div>
  );
};

export default ScheduleYourOnboarding;
