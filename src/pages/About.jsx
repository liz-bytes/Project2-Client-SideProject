
import React from 'react';
import './About.css'
const VandenbergLaunchpad =() => {
  return(
        <>
        <div className="card">
            <h2 className='card-tittle'>Vandenberg USSF Base</h2>
            <img
            src="https://i.imgur.com/asp5L08.png"
            alt="Vandenberg Launchpad"
            className="card-image"
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
        <div className="card">
      <h2 className="card-title">Cape Canaveral</h2>
        <img
        src="https://i.imgur.com/1jwU0Pk.png"
        alt="Cape Canaveral"
        className="card-image"
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
        <div className="container">
        <VandenbergLaunchpad />
        <CapeCanaveral />
      </div>
    );
  };

export default About;