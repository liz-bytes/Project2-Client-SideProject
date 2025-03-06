import React from "react";
import './LaunchCard.css'
import { Link } from "react-router-dom";

function LaunchCard({ launch, onBack }) {

  const {webcast, youtube, article, wikipedia} = launch;
  return (
    <div className='space-card'>
      <h3>Name of the Launch: {launch.name}</h3>
      <p>Launch Date: {new Date(launch.date_utc).toLocaleString()}</p>
      <p>Details: {launch.details || "No details available"}</p>
      <p>Success: {launch.success ? "Yes" : "No"}</p>
      <p>Flight Number: {launch.flight_number}</p>
      <p>Upcoming: {launch.upcoming ? "Yes" : "No"}</p>

      <p>Rocket: {launch.rocket}</p>
      {/* <Link to ={{pathname: `launch.webcast`}} target="_blank">Youtube Link</Link> */}

      {launch.links?.patch?.small && (
        <img src={launch.links.patch.small} alt={`Patch for ${launch.name}`} style={{ width: '100px' }} />
      )}

      <br />
      <br />

      <div className="go-back-btn">
        <button onClick={onBack} className="space-button">Go Back</button>
      </div>
    </div>
  );
}

export default LaunchCard;