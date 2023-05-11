// import React from "react";

// const ScheduleYourOnboarding = ({setShowCalendly , handleCalendlyClose}) => {
//   return (

//     <div>
//           {/* <iframe
//             src="https://calendly.com/d/z57-w3z-9mk/30-minute-meeting"
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             scrolling="no"
//             onLoad={() => setShowCalendly(false)}

//           /> */}

//           <button
//             className="btn"
//             onClick={() => handleCalendlyClose()}
//             // onLoad={() => setShowCalendly(false)}
//           >
//             {" "}
//             Close ShowCalendly{" "}
//           </button>
//         </div>

//     // <div>
//     //   <div>
//     //     <div>ScheduleYourOnboarding </div>
//     //     <button className="btn" onClick={() => setIsLoggedIn(true)}>
//     //       {" "}
//     //       Video
//     //     </button>
//     //   </div>
//     // </div>
//   );
// };

// export default ScheduleYourOnboarding;

import React from "react";
import { InlineWidget } from "react-calendly";

function ScheduleYourOnboarding({ setShowCalendly, handleCalendlyClose }) {
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
        // onLoad={() => setShowCalendly(false)}
        // onClose={handleCalendlyClose}
      />
      <button className="btn" onClick={() => handleCalendlyClose()}>
        {" "}
        Close Calendly {" "}
      </button>
    </div>
  );
}

export default ScheduleYourOnboarding;
