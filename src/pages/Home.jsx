// // We want home to display a welcome message
// //We want home to tell us about the app
// //we want home to have some images
// //we wnat home to have an youtube video(spaceforce recuitment video)
// import React from 'react';
// import './Home.css';
// // import launchVideo from './public/spacex-launch.mp4';

// const Home = () => {
//     return (
// //            <div className='HomePageContainer'>
// //                <div className='WelcomeMessage'>
// //                    <h1>Welcome to SpaceXplorer</h1>
// //                    </div>
// //                <div className='SubMessage'><p>SpaceXplorer is a web application that allows you to explore the world of SpaceX. You can view information about SpaceX's rockets, capsules, and crew members. You can also view previous live streams of launches. SpaceXplorer is the ultimate destination for all things SpaceX!</p></div>
// //                {/* <img src='' alt=''></img>
// //                <img src='' alt=''></img>
// //                <img src='' alt=''></img> */}
// //            </div>
// //        );
// //    };
//         <div className='HomePageContainer'>
//         <div className='WelcomeMessage'>
//         <h1>Welcome to SpaceXplorer</h1>
//     </div>

//     <div className='ContentContainer'>
//         <div className='SubMessage'>
//             <p>Embark on a journey through the cosmos. <br />
//             Discover SpaceX's missions, technology, and incredible launches.</p>
//         </div>

//         {/* Video on the side */}
//         <div className="video-box">
//             <video autoPlay loop muted className="side-video">
//             <source src="/spacex-launchEdited.mp4" type="video/mp4" />
//                 {/* <source src="/spacex-launch.mp4" type="video/mp4" /> */}
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     </div>
// </div>
//     );
// };

// export default Home;


import React, { useEffect, useRef } from "react";
import "./Home.css";

const Home = () => {
  const videoRef = useRef(null); // Create a reference for the video element

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3; // Set volume to 30%
      videoRef.current.muted = true; // Start muted
      videoRef.current.play().catch(error => console.error("Video autoplay prevented", error));
    }
  }, []);

  return (
    <div className="HomePageContainer">
      <div className="WelcomeMessage">
        <h1>Welcome to SpaceXplorer</h1>
      </div>

      <div className="ContentContainer">
        <div className="SubMessage">
          <p>
            Embark on a journey through the cosmos. <br />
            Discover SpaceX's missions, technology, and incredible launches.
          </p>
        </div>

        {/* Video starts muted but with volume set to 30% */}
        <div className="video-box">
          <video ref={videoRef} autoPlay loop muted controls>
            {/* <source src="/spacex-launch.mov" type="video/mov" /> */}
            <source src="/Spacex-Launch720.mp4" type="video/mp4" />
            {/* <source src="/Spacex-Launch.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;



