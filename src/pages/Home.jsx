import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";
//import LaunchCard from "../components/LaunchCard.js";

// const API_URL = "https://api.spacexdata.com/v5/launches";

// // Launchpad IDs for filtering
// const VSFB_ID = "5e9e4502f5090995de566f86"; // Vandenberg SFB
// const CCSFS_ID = "5e9e4502f509094188566f88"; // Cape Canaveral SFS

function Home() {
  const API_URL = "https://api.spacexdata.com/v5/launches";
  const VSFB_ID = "5e9e4502f5090995de566f86"; // Vandenberg SFB
  const CCSFS_ID = "5e9e4502f509094188566f88"; 
  const { data: launches = [], loading, error } = useFetch(API_URL); //  Fetch launches
  const [filteredLaunches, setFilteredLaunches] = useState([]); // Initially empty
  const [selectedLocation, setSelectedLocation] = useState(""); // Track selected location

  // Update filtered launches when location or launches change
  useEffect(() => {
    if (selectedLocation) {
      const filtered = launches.filter((launch) =>
        selectedLocation === "VSFB"
          ? launch.launchpad === VSFB_ID
          : launch.launchpad === CCSFS_ID
      );
      setFilteredLaunches(filtered);
    }
  }, [selectedLocation, launches]);

  return (
    <> 
      <h1>SpaceXplorer</h1>
      <h2>Search by location: Vandenberg SFB or Cape Canaveral</h2>

      {/* Dropdown for location selection */}
      <select value={selectedLocation} onChange={(event) => setSelectedLocation(event.target.value)}>
        <option value="">Select a location</option>
        <option value="VSFB">Vandenberg SFB</option>  
        <option value="CCSFS">Cape Canaveral SFS</option>  
      </select>

      {/* Show loading and error states */}
      {loading && <p>Loading launches...</p>}
      {error && <p>Error fetching launches: {error}</p>}

      {/* Display filtered launches safely */}
      <div>
        {selectedLocation && filteredLaunches.length > 0 ? (
          filteredLaunches.map(launch => (
            <div key={launch.id} style={{ marginBottom: '20px' }}>
              <h3>Name of the Launch: {launch.name}</h3>
              <p>Launch Date: {launch.date_utc}</p>
              <p>Details: {launch.details}</p>
              <p>Rocket: {launch.rocket}</p>
              <p>Launchpad: {launch.launchpad}</p>
              <p>Success: {launch.success ? 'Yes' : 'No'}</p>
              <p>Flight Number: {launch.flight_number}</p>
              <p>Upcoming: {launch.upcoming ? 'Yes' : 'No'}</p>

              <p> Mission Patch</p>
              {launch.links && launch.links.patch && (
                <div>
                  <img
                    src={launch.links.patch.small} // Assuming `small` is the patch URL
                    alt={`Patch for ${launch.name}`}
                    style={{ width: '100px', height: 'auto' }}
                  />
                </div>
              )}
              <p>---------------------------------</p>
            </div>
          ))
        ) : (
          selectedLocation && <p>No launches available for this location.</p> // Show message only if a location is selected and no launches are found
        )}
      </div>
    </>
  );
}

export default Home;
