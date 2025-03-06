import { useState, useContext } from "react";
import { LaunchesContext } from "../context/LaunchesContext";
import LaunchesList from "../components/LaunchesList.jsx";
import LaunchCard from "../components/LaunchCard.jsx";
import './LaunchPage.css'

function LaunchPage() {
  const { filteredLaunches, filterLaunches, isLoading, error } = useContext(LaunchesContext);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLaunch, setSelectedLaunch] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    filterLaunches(location);
  };

  const handleLaunchClick = (launch) => {
    setSelectedLaunch(launch);
  };

  const handleGoBack = () => {
    setSelectedLaunch(null);
  };

  const handleGoBackToLocation = () => {
    setSelectedLocation(null);
  }

  return (
    <>
     <div className="space-theme">
      <h2>Space Force Launches</h2>

      {!selectedLocation ? (
        <div className="location-options">
          <div onClick={() => handleLocationClick("VSFB")} className="location">
            <img src="/Delta30.jpg" alt="Vandenberg SFB" />
            <p>Vandenberg SFB</p>
          </div>

          <div onClick={() => handleLocationClick("CCSFS")} className="location" >
            <img src="/Delta45.jpg" alt="Cape Canaveral SFS" style={{ width: '150px', height: '200px' }} />
            <p>Cape Canaveral SFS</p>
          </div>

        </div>
      ) : (
        <>
          {selectedLaunch ? (
            <LaunchCard launch={selectedLaunch} onBack={handleGoBack} />
          ) : (
            <LaunchesList handleLaunchClick={handleLaunchClick} onBackToLocation={handleGoBackToLocation}/>
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
