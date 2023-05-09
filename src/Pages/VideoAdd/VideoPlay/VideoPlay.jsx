import React from "react";

const VideoPlay = () => (
  <div>
    <video
      width="600px"
      height="400px"
      //   onloadeddata="this.play();this.muted=true;"
      autoPlay
      loop
      
    >
      <source
        src="http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag or the file format of this
      video.
    </video>
  </div>
);

export default VideoPlay;
