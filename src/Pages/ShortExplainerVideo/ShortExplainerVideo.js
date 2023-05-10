// import React from "react";
// import video from "./video/videoplayback.mp4";

// const ShortExplainerVideo = ({ handleVideoEnd }) => {
//   return (
//     <div>
//       {/* <iframe
//           width="560"
//           height="315"
//           src="https://www.youtube.com/embed/tWoo8i_VkvI?autoplay=1&controls=0"
//           title="Short explainer video"
//           frameBorder="0"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//           onEnded={handleVideoEnd}
//         /> */}

//       {/* <iframe
//         width="560"
//         height="315"
//         src="https://www.youtube-nocookie.com/embed/tWoo8i_VkvI?controls=0"
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         onEnded={() => handleVideoEnd()}
//         onPlay={()=>handleVideoEnd()}
//       ></iframe> */}

//       {/* <video width="750" height="500" autoPlay onEnded={handleVideoEnd}>
//         <source src={video} type="video/mp4" />
//       </video> */}

//       <video
//         width="750"
//         height="500"
//         alt=" No suppoty"
//         onEnded={handleVideoEnd}
//         autoPlay
//       >
//         {" "}
//         <source src={video} type="video/mp4" />
//         No suppoty
//       </video>

//       <button className="btn" onClick={() => handleVideoEnd()}>
//         {" "}
//         Close Video{" "}
//       </button>
//     </div>
//   );
// };

// export default ShortExplainerVideo;

import React, { useEffect, useRef } from "react";
import vi from "./video/videoplayback.mp4";

function ShortExplainerVideo({handleVideoEnd}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          // Autoplay failed, handle the error
          console.error("Autoplay failed:", error);
        });
      }
    };
    const handleFirstInteraction = () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      playVideo();
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  return (
    <video ref={videoRef} autoPlay onEnded={handleVideoEnd}>
      <source src={vi} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default ShortExplainerVideo;
