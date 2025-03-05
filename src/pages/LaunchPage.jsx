// import { useState, useEffect } from "react";
// import useFetch from "../hooks/useFetch.js";
// import LaunchesList from "../components/LaunchesList.jsx";
// import LaunchCard from "../components/LaunchCard.jsx";

// function LaunchPage() {
//   const API_URL = "https://api.spacexdata.com/v5/launches";
//   const VSFB_ID = '5e9e4502f5090995de566f86' && `5e9e4501f509094ba4566f84`;
//   const CCSFS_ID = `5e9e4502f509094188566f88` && `5e9e4502f509092b78566f87`;
//   const { data: launches = [], loading, error } = useFetch(API_URL);
//   const [filteredLaunches, setFilteredLaunches] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [showLaunchPage, setShowLaunchPage] = useState(false);
//   const [showLaunchDetails, setShowLaunchDetails] = useState(null);

//   useEffect(() => {
//     if (selectedLocation) {
//       const filtered = launches.filter((launch) =>
//         selectedLocation === "VSFB"
//           ? launch.launchpad === VSFB_ID
//           : launch.launchpad === CCSFS_ID

//       );
//       setFilteredLaunches(filtered);
//     }
//   }, [selectedLocation, launches]);

//     const handleLocationClick = (location) => {
//     setSelectedLocation(location);
//     setShowLaunchPage(true);
//   };

//   const handleGoBack = () => {
//     setSelectedLocation("");
//     setShowLaunchPage(false);
//     setShowLaunchDetails(null);
//   };

//   const handleLaunchClick = (launch) => {
//     setShowLaunchDetails(launch);
//   }

//   return (
//       <>
//         <h2>Space Force Launch Details</h2>

//         {!showLaunchPage ? (
//           <div>
//             <div
//               onClick={() => handleLocationClick("VSFB")}
//               style={{ cursor: 'pointer', display: 'inline-block', marginRight: '20px' }}
//             >
//               <img src="/Delta30.jpg" alt="Vandenberg SFB" style={{ width: '150px', height: '200px' }} />
//               <p>Vandenberg SFB</p>
//             </div>
//             <div
//               onClick={() => handleLocationClick("CCSFS")}
//               style={{ cursor: 'pointer', display: 'inline-block' }}
//             >
//               <img src="/Delta45.jpg" alt="Cape Canaveral SFS" style={{ width: '150px', height: '200px' }} />
//               <p>Cape Canaveral SFS</p>
//             </div>
//           </div>
//         ) : (
//           <>
//             {showLaunchDetails?(
//               <LaunchCard launch={showLaunchDetails} onBack={handleGoBack} />
//             ):(
//               <LaunchesList
//               launches={filteredLaunches}
//               loading={loading}
//               error={error}
//               handleLaunchClick={handleLaunchClick}
//               />
//             )}
//           </>
//         )}

//         {loading && <p>Loading launches...</p>}
//         {error && <p>Error fetching launches: {error}</p>}
//       </>
//     );
// }

// export default LaunchPage;

import { useState, useContext } from "react";
import { LaunchesContext } from "../context/LaunchesContext";
import LaunchesList from "../components/LaunchesList.jsx";
import LaunchCard from "../components/LaunchCard.jsx";
import './LaunchPage.css'

function LaunchPage() {
  const { filteredLaunches, filterLaunches, isLoading, error } = useContext(LaunchesContext);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLaunch, setSelectedLaunch] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    filterLaunches(location);
  };

  const handleGoBack = () => {
    //setSelectedLocation("");
    setSelectedLaunch(null);
  };

  return (
    <>
     <div className="space-theme">
      <h2>Space Force Launch Details</h2>

      {!selectedLocation ? (
        <div className="location-options">
          <div onClick={() => handleLocationClick("VSFB")} style={{ cursor: 'pointer', marginRight: '20px' }}>
            <img src="/Delta30.jpg" alt="Vandenberg SFB" style={{ width: '150px', height: '200px' }} />
            <p>Vandenberg SFB</p>
          </div>
          <div onClick={() => handleLocationClick("CCSFS")} style={{ cursor: 'pointer' }}>
            <img src="/Delta45.jpg" alt="Cape Canaveral SFS" style={{ width: '150px', height: '200px' }} />
            <p>Cape Canaveral SFS</p>
          </div>
        </div>
      ) : (
        <>
          {selectedLaunch ? (
            <LaunchCard launch={selectedLaunch} onBack={handleGoBack} />
          ) : (
            <LaunchesList handleLaunchClick={setSelectedLaunch} />
          )}
        </>
      )}

      {isLoading && <p>Loading launches...</p>}
      {error && <p>Error fetching launches: {error}</p>}
      </div>
    </>
  );
}

export default LaunchPage;
