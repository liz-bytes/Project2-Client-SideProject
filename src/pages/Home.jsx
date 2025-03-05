// We want home to display a welcome message
//We want home to tell us about the app
//we want home to have some images
//we wnat home to have an youtube video(spaceforce recuitment video)
import React from 'react';


import './Home.css';


const Home = () => {
    return (
        <>
        <div className='HomePageContainer'>
            <div id='WelcomeMessage'>
                <h1>Welcome to SpaceXplorer</h1></div>
            <div id='SubMessage'><p>SpaceXplorer is a web application that allows you to explore the world of SpaceX. <br></br>You can view information about SpaceX's rockets, capsules, and crew members. You can also view previous live streams of launches. SpaceXplorer is the ultimate destination for all things SpaceX!</p></div>
            {/* <img src='' alt=''></img>
            <img src='' alt=''></img>
            <img src='' alt=''></img> */}
        </div>
        </>
    );
};

export default Home;


