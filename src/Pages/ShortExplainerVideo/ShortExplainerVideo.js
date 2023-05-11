import React, { useEffect, useRef } from "react";
import vi from "./video/videoplayback.mp4";

function ShortExplainerVideo({ handleVideoEnd }) {
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
    <div className="h-screen flex items-center justify-center bg-black">
      <video
        className="p-5 bg-slate-800"
        width="720"
        height="490"
        ref={videoRef}
        autoPlay
        onEnded={handleVideoEnd}
      >
        <source src={vi} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ShortExplainerVideo;
