import React from "react";
import './LaunchCard.css'

function LaunchCard({ launch, onBack }) {
  const failureReasons = launch.failures ? launch.failures.map(failure => failure.reason) : [];


  return (
    <div className='space-card'>
      <h3 className="bold-text">Name: {launch.name}</h3>
      <p>Launch Date: {new Date(launch.date_utc).toLocaleString()}</p>
      <p>Details: {launch.details || "No details available"}</p>
      <p>Flight Number: {launch.flight_number}</p>
      <p>Upcoming: {launch.upcoming ? "Yes" : "No"}</p>
      <p>Success: {launch.success ? "Yes" : "No"}</p>
      <p>Failures:
          {failureReasons.length > 0 ? (
            <ul>
              {failureReasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          ) : (
            <p>No failures recorded</p>
          )}
      </p>

      <p>Rocket: {launch.rocket}</p>
      <a href={launch.links.webcast} target="_blank" rel="noopener noreferrer">YouTube Link</a>
      <br />
      <br />
      <a href={launch.links.article} target="_blank" rel="noopener noreferrer">Article Link</a>
      <br />
      <br />
      <a href={launch.links.wikipedia} target="_blank" rel="noopener noreferrer">Wikipedia Link</a>

      <br />
      <br />

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