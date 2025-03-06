import React from "react";
import './LaunchCard.css'
import { useState, useEffect } from "react";

function LaunchCard({ launch, onBack }) {
  const saveToFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []; //  Get existing favorites
    const isAlreadyFavorite = storedFavorites.some(
      (fav) => fav.id === launch.id
    ); // Prevent duplicates

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...storedFavorites, launch];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Save to local storage
      alert("Added to Favorites! 🚀"); // Confirmation message
    } else {
      alert("This launch is already in Favorites! ⭐");
    }
  };

  const failureReasons = launch.failures ? launch.failures.map(failure => failure.reason) : [];

  return (
    <div className='space-card'>
      {launch.links?.patch?.small && (
        <img src={launch.links.patch.small} alt={`Patch for ${launch.name}`} style={{ width: '100px' }} />
      )}

      <br />
      <br />

      <h3 className="bold-text">Name: {launch.name}</h3>
      <p>Launch Date: {new Date(launch.date_utc).toLocaleString()}</p>
      <p>Details: {launch.details || "No details available"}</p>
      <p>Flight Number: {launch.flight_number}</p>
      <p>Upcoming: {launch.upcoming ? "Yes" : "No"}</p>
      <p>Success: {launch.success ? "Yes" : "No"}</p>
      <div>Failures:
          {failureReasons.length > 0 ? (
            <ul>
              {failureReasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          ) : (
            <p>No failures recorded</p>
          )}
      </div>

      <a href={launch.links.webcast} target="_blank" rel="noopener noreferrer" className="space-link">YouTube</a>

      <a href={launch.links.article} target="_blank" rel="noopener noreferrer" className="space-link">Article</a>

      <a href={launch.links.wikipedia} target="_blank" rel="noopener noreferrer" className="space-link">Wikipedia</a>

      <br />
      <br />

      {launch.links?.flickr?.original && (
                <div>
                  {launch.links.flickr.original.slice(0, 3).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index + 1} for ${launch.name}`}
                      style={{ width: '100px', marginRight: '10px' }}
                    />
                  ))}
                </div>
          )
        }

      <br />
      <br />

      {/*  New Save to Favorites Button */}
      <button onClick={saveToFavorites} className="space-button green-btn">
        Save to Favorites
      </button>
      <br />
      <br />

      <div className="go-back-btn"> <button onClick={onBack} className="space-button">Go Back</button>
      </div>
    </div>
  );
}

export default LaunchCard;