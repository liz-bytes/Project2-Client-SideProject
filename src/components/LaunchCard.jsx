import React from "react";
import './LaunchCard.css'

function LaunchCard({ launch, onBack }) {
  return (
    <div>
      <h3>Name of the Launch: {launch.name}</h3>
      <p>Launch Date: {new Date(launch.date_utc).toLocaleString()}</p>
      <p>Details: {launch.details || "No details available"}</p>
      <p>Rocket: {launch.rocket}</p>
      <p>Launchpad: {launch.launchpad}</p>
      <p>Success: {launch.success ? "Yes" : "No"}</p>
      <p>Flight Number: {launch.flight_number}</p>
      <p>Upcoming: {launch.upcoming ? "Yes" : "No"}</p>

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

// import React from "react";

// function LaunchCard({ launch, handleGoBack }) {
//   return (
//     <div>
//       <h3>Name of the Launch: {launch.name}</h3>
//       <p>Launch Date: {new Date(launch.date_utc).toLocaleString()}</p>
//       <p>Details: {launch.details || "No details available"}</p>
//       <p>Rocket: {launch.rocket}</p>
//       <p>Launchpad: {launch.launchpad}</p>
//       <p>Success: {launch.success ? 'Yes' : 'No'}</p>
//       <p>Flight Number: {launch.flight_number}</p>
//       <p>Upcoming: {launch.upcoming ? 'Yes' : 'No'}</p>

//       <p>Mission Patch</p>
//       {launch.links && launch.links.patch && (
//         <div>
//           <img
//             src={launch.links.patch.small}
//             alt={`Patch for ${launch.name}`}
//             style={{ width: '100px', height: 'auto' }}
//           />
//         </div>
//       )}

//       <button onClick={handleGoBack}>Go Back</button>
//     </div>
//   );
// }

// export default LaunchCard;


// <div>
// {selectedLocation && filteredLaunches.length > 0 ? (
//   filteredLaunches.map(launch => (
//     <div key={launch.id} style={{ marginBottom: '20px' }}>
//       <h3>Name of the Launch: {launch.name}</h3>
//       <p>Launch Date: {launch.date_utc}</p>
//       <p>Details: {launch.details}</p>
//       {/* <p>Details: {launch.details || "No details available"}</p> */}
//       <p>Rocket: {launch.rocket}</p>
//       <p>Launchpad: {launch.launchpad}</p>
//       <p>Success: {launch.success ? 'Yes' : 'No'}</p>
//       <p>Flight Number: {launch.flight_number}</p>
//       <p>Upcoming: {launch.upcoming ? 'Yes' : 'No'}</p>

//       <p> Mission Patch</p>
//       {launch.links && launch.links.patch && (
//         <div>
//           <img
//             src={launch.links.patch.small}
//             alt={`Patch for ${launch.name}`}
//             style={{ width: '100px', height: 'auto' }}
//           />
//         </div>


// import React, { useState, useEffect } from "react";

// const PokemonCard = ({ name, url, onSelect }) => {
//   const [pokemonDetails, setPokemonDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   /* const url = (double declaration */ useEffect(() => {
//     const fetchPokemonDetails = async () => {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setPokemonDetails(data);
//     };

//     fetchPokemonDetails();
//   }, [url]);

//   if (!pokemonDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="pokemon-card" onClick={() => onSelect(pokemonDetails)}>
//       <h2>{name}</h2>

//       <img
//         src={pokemonDetails.sprites.front_default}
//         alt={name}
//         style={{ width: "100px", height: "100px" }}
//       />
//       <p>Type: {pokemonDetails.types[0].type.name}</p>
//     </div>
//   );
// };

// export default PokemonCard;
