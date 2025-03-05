import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";
//import LaunchCard from "../components/LaunchCard.js";

function Home() {
  const API_URL = "https://api.spacexdata.com/v5/launches";
  const VSFB_ID = '5e9e4502f5090995de566f86' && `5e9e4501f509094ba4566f84`; // Vandenberg SFB
  const CCSFS_ID = `5e9e4502f509094188566f88` && `5e9e4502f509092b78566f87`;
  const { data: launches = [], loading, error } = useFetch(API_URL); //  Fetch launches
  const [filteredLaunches, setFilteredLaunches] = useState([]);
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
      <h2>Space Force Launch Detlas</h2>
      <div>
        <div
          onClick={() => setSelectedLocation("VSFB")}
          style={{ cursor: 'pointer', display: 'inline-block', marginRight: '20px' }}
        >
          <img src="/Delta30.jpg" alt="Vandenberg SFB" style={{ width: '150px', height: '200px' }} />
          <p>Vandenberg SFB</p>
        </div>
        <div
          onClick={() => setSelectedLocation("CCSFS")}
          style={{ cursor: 'pointer', display: 'inline-block' }}
        >
          <img src="/Delta45.jpg" alt="Cape Canaveral SFS" style={{ width: '150px', height: '200px' }} />
          <p>Cape Canaveral SFS</p>
        </div>
      </div>

      {/* Show loading and error states */}
      {loading && <p>Loading launches...</p>}
      {error && <p>Error fetching launches: {error}</p>}

      {/* Display filtered launches safely */}
      <div>
        {selectedLocation && filteredLaunches.length > 0 ? (
          filteredLaunches.map(launch => (
            <div key={launch.id} style={{ marginBottom: '20px' }}>
              <h3>Name of the Launch: {launch.name}</h3>
              <p> Mission Patch</p>
              {launch.links && launch.links.patch && (
                <div>
                  <img
                    src={launch.links.patch.small}
                    alt={`Patch for ${launch.name}`}
                    style={{ width: '100px', height: 'auto' }}
                  />
                </div>
              )}
              {/* <p>Launch Date: {launch.date_utc}</p>
              <p>Details: {launch.details}</p> */}
              {/* <p>Details: {launch.details || "No details available"}</p> */}
              {/* <p>Rocket: {launch.rocket}</p>
              <p>Launchpad: {launch.launchpad}</p>
              <p>Success: {launch.success ? 'Yes' : 'No'}</p>
              <p>Flight Number: {launch.flight_number}</p>
              <p>Upcoming: {launch.upcoming ? 'Yes' : 'No'}</p>

              <p> Mission Patch</p>
              {launch.links && launch.links.patch && (
                <div>
                  <img
                    src={launch.links.patch.small}
                    alt={`Patch for ${launch.name}`}
                    style={{ width: '100px', height: 'auto' }}
                  />
                </div>
              )}
              <p>---------------------------------</p> */}
            </div>
          ))
        ) : (
          selectedLocation && <p>No launches available for this location.</p>
        )}
      </div>
    </>
  );
}

export default Home;
