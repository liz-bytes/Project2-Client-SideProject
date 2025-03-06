import React, { useEffect, useRef } from "react";
import "./Home.css";
import TodoLaunches from "../components/TodoLaunches";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => console.error("Video autoplay prevented", error));
    }
  }, []);

  return (
    <div className="HomePageContainer">
      <div className="WelcomeMessage">
        <h1>Welcome to SpaceXplorer</h1>
      </div>

      <div className="video-box">
        <video ref={videoRef} autoPlay loop muted controls className="main-video">
          <source src="/Spacex-Launch720p.mp4" type="video/mp4" />
          <source src="/Spacex-Launch720p.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="SubMessage">
        <p>Embark on a journey through the cosmos.<br /> <br/> <br />The Ultimate tool to Track SpaceX's missions, technology, and incredible launches.</p>
      </div>

      <TodoLaunches />
    </div>
  );
};

export default Home;