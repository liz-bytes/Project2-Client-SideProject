import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js"


// “Vandenberg”, “5e9e4501f5090910d4566f83", “5e9e4502f509092b78566f87”|  Cape Canaveral “5e9e4501f509094ba4566f84", “5e9e4502f509094188566f88”

//const API_URL = "https://api.spacexdata.com/v5/launches";

function Home(){
  const API_URL = "https://api.spacexdata.com/v5/launches";
  const launches = useFetch(API_URL); // Fetch all launches   
  //const { data: launches = [], loading, error } = useFetch(API_URL);

  console.log(launches);
  const [filteredLaunches, setFilteredLaunches] = useState([]); // Initially empty
  const [selectedLocation, setSelectedLocation] = useState(''); // State for selected location

  const VSFB_ID = "5e9e4502f5090995de566f86"; // Vandenberg SFB
  const CCSFS_ID = "5e9e4502f509094188566f88"; // Cape Canaveral Space Force Station

// there is an issue here.
  
  useEffect(()=>{
    if (launches.length > 0) {
      // Initial filter if a location is already selected
      handleLocationChange({ target: { value: selectedLocation } });
    }
  }, [launches, selectedLocation]);

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;

//     React state updates asynchronously, so selectedLocation does not update immediately.
// Fix: Instead of reading selectedLocation immediately, use event.target.value directly in filtering. 


    setSelectedLocation(selectedLocation); // Update selected location

    // Filter launches based on the selected launchpad ID
    let filtered;
    if (selectedLocation === 'VSFB') {
      filtered = launches.filter(launch => launch.launchpad === VSFB_ID);
    } else if (selectedLocation === 'CCSFS') {
      filtered = launches.filter(launch => launch.launchpad === CCSFS_ID);
    
    setFilteredLaunches(filtered); // Update the filtered launches state
  };

  return(
    <> 
      <h1>SpaceXplorer</h1>
      <h2>Search by location: Vandenberg SFB or Cape Canaveral</h2>

      <select value={selectedLocation} onChange={handleLocationChange}>
        <option value="">Select a location</option>
        <option value="VSFB">Vandenberg SFB</option>  
  {/* This should match the expected value inside handleLocationChange(), which is "CCSFS" */}
        <option value="CCSFB">Cape Canaveral SFB</option>  
      </select>

      <div>
          {selectedLocation && filteredLaunches.length>0 ? (
          filteredLaunches.map(launch => (
            <div key={launch.id} style={{marginBottom: '20px'}}>
              <h3>{launch.name}</h3>
              <p>{launch.details}</p>
            </div>
          ))
          // This does not handle filteredLaunches.length === 0 properly.
// Fix: Ensure it only displays when selectedLocation is chosen and there are no matching launches.
        ) : (selectedLocation && <p> No launch history available.</p>)
          } 
      </div>
    </>
  )
}

export default Home;


// import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";

const API_URL = "https://api.spacexdata.com/v5/launches";

// Launchpad IDs
const VSFB_ID = "5e9e4502f5090995de566f86"; // Vandenberg SFB
const CCSFS_ID = "5e9e4502f509094188566f88"; // Cape Canaveral Space Force Station

function Home() {
  const { data: launches = [], loading, error } = useFetch(API_URL); // ✅ Ensure launches is always an array
  const [filteredLaunches, setFilteredLaunches] = useState([]); // ✅ Empty array by default
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
  }, [selectedLocation, launches]); // ✅ Runs when location or data changes

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
          filteredLaunches.map((launch) => (
            <div key={launch.id} style={{ marginBottom: "20px" }}>
              <h3>{launch.name}</h3>
              <p>{launch.details || "No details available."}</p>
            </div>
          ))
        ) : (
          selectedLocation && <p>No launch history available.</p>
        )}
      </div>
    </>
  );
}

export default Home;
