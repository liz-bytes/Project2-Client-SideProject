// import React from "react";
// import LaunchCard from "./LaunchCard";

// function LaunchesList({ launches, loading, error, handleLaunchClick }) {
//   return (
//     <div>
//       {loading && <p>Loading launches...</p>}
//       {error && <p>Error fetching launches: {error}</p>}

//       {launches.length > 0 ? (
//         launches.map((launch) => (
//           <div key={launch.id} style={{ marginBottom: '20px' }}>
//             <h3>{launch.name}</h3>
//             <p>Mission Patch</p>
//             {launch.links && launch.links.patch && (
//               <div>
//                 <img
//                   src={launch.links.patch.small}
//                   alt={`Patch for ${launch.name}`}
//                   style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
//                   onClick={() => handleLaunchClick(launch)}  // On click, pass the selected launch
//                 />
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No launches available for this location.</p>
//       )}
//     </div>
//   );
// }

// export default LaunchesList;
import { useContext } from "react";
import { LaunchesContext } from "../context/LaunchesContext";
import LaunchCard from "./LaunchCard";
import './LaunchesList.css';
import { useNavigate } from "react-router-dom";



function LaunchesList({ handleLaunchClick }) {
  const { filteredLaunches, isLoading, error } = useContext(LaunchesContext);
  const navigate = useNavigate(); //  Hook to navigate back

// function LaunchesList({ handleLaunchClick, handleGoBack, onBack} ) {
//   const { filteredLaunches, isLoading, error } = useContext(LaunchesContext);

// const handleGoBack = () => {
//     setSelectedLocation("");
//     // setSelectedLaunch(null);
//   };

// const navigate = useNavigate();

// const handleGoBackToLocations = () => {
  // setSelectedLocation("");

  // return (

    return (
      <>
      <div className="container-launch">

        <button onClick={() => navigate("/launches")} className="space-button">
          Go Back
        </button>
</div>

    {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
      {/* <button onClick={onBack}>Go Back to Location</button> */}
    <div className= "container-launch">
      {isLoading && <p>Loading launches...</p>}
      {error && <p>Error fetching launches: {error}</p>}


      {filteredLaunches.length > 0 ? (
        filteredLaunches.map((launch) => (
          <div
          className="card-launch"
          key={launch.id}
          onClick={() => handleLaunchClick(launch)}
           >
            <h3 className="card-title">{launch.name} </h3>

            {launch.links?.patch?.small && (
              <img
                src={launch.links.patch.small}
                alt={`Patch for ${launch.name}`}
                className="launch-image"

              />
            )}
          </div>

        ))
      ) : (
        <p>No launches available for this location.</p>

        // <>{selectedLaunch ? (
        //   <LaunchCard launch={selectedLaunch} onBack={handleGoBack} />
        // ) : (
        //   <LaunchesList handleLaunchClick={setSelectedLaunch} />
        // )}
        // </>
      )}

    </div>
    </>
  );
}

export default LaunchesList;
