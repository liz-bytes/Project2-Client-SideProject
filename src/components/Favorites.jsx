import React, { useState, useEffect } from "react";
import './Favorite.css'

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []; //  Load from local storage
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((launch) => launch.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); //  Update local storage
  };

  return (
    <div>
      <h1>🚀 Your Favorite Launches</h1>
      {favorites.length > 0 ? (
        favorites.map((launch) => (
          <div key={launch.id} className="favorite-card">
            <h3>{launch.name}</h3>
            <p>Launch Date: {new Date(launch.date_utc).toLocaleString()}</p>

            {launch.links?.patch?.small && (
              <img
                src={launch.links.patch.small}
                alt={`Patch for ${launch.name}`}
                style={{ width: "100px" }}
              />
            )}

            <br />
            <button className="remove-btn" onClick={() => removeFromFavorites(launch.id)}>
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No favorites saved yet!</p>
      )}
    </div>
  );
};

export default Favorites;
