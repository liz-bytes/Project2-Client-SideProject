import { useContext } from "react";
import { LaunchesContext } from "../context/LaunchesContext";
import './LaunchesList.css';

function LaunchesList({ handleLaunchClick, onBackToLocation }) {
  const { filteredLaunches, isLoading, error } = useContext(LaunchesContext);

  return (
    <>

      <div className="container-launch">
        <button onClick={onBackToLocation} className="space-button">
            Go Back to Locations
         </button>
      </div>

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
      )}

      </div>
      </>
    );
}

export default LaunchesList;