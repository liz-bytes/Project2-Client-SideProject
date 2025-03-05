
import React from 'react';

const VandenbergLaunchpad =() => {
  return(
        <>
        <div className="launchpad-card">
            <h2>Vandenberg Launchpad</h2>
            <img
            src="https://i.imgur.com/asp5L08.png"
            alt="Vandenberg Launchpad"
            style={{ width: '100%', height: 'auto' }}
            />
            <p>
            Vandenberg Air Force Base in California serves as a major launch site for polar orbiting missions.
            It has a rich history in spaceflight and plays a key role in launching satellites into orbit.
             </p>



        </div>

        </>
    )

}

const CapeCanaveral =() =>{
    return(
        <div className="launchpad-card">
        <h2>Cape Canaveral</h2>
        <img
        src="https://i.imgur.com/1jwU0Pk.png"
        alt="Cape Canaveral"
        style={{ width: '100%', height: 'auto' }}
        />
        <p>
        Cape Canaveral in Florida is a historic launch site used by both NASA and commercial entities.
        It has been the starting point for many significant space missions, including those from SpaceX.
        </p>

    </div>
    )

}

const About = () => {
    return (
      <div className="launch-locations" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <VandenbergLaunchpad />
        <CapeCanaveral />
      </div>
    );
  };

export default About;