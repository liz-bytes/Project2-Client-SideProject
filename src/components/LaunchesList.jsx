import React from "react";
import LaunchCard from "./LaunchCard";

function LaunchesList({ launches, loading, error, handleLaunchClick }) {
  return (
    <div>
      {loading && <p>Loading launches...</p>}
      {error && <p>Error fetching launches: {error}</p>}

      {launches.length > 0 ? (
        launches.map((launch) => (
          <div key={launch.id} style={{ marginBottom: '20px' }}>
            <h3>{launch.name}</h3>
            <p>Mission Patch</p>
            {launch.links && launch.links.patch && (
              <div>
                <img
                  src={launch.links.patch.small}
                  alt={`Patch for ${launch.name}`}
                  style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
                  onClick={() => handleLaunchClick(launch)}  // On click, pass the selected launch
                />
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No launches available for this location.</p>
      )}
    </div>
  );
}

export default LaunchesList;

// import { useContext } from "react";
// import { LaunchesContext } from "../LaunchesContext";
// import LaunchCard from "../components/LaunchCard";

// const LaunchesList = () => {
//   const { filteredLaunches } = useContext(LaunchesContext);

//   return (
//     <div>
//       {filteredLaunches.length > 0 ? (
//         filteredLaunches.map((launch) => <LaunchCard key={launch.id} launch={launch} />)
//       ) : (
//         <p>No launches available for this location.</p>
//       )}
//     </div>
//   );
// };

// export default LaunchesList;

// import React, { useState, useEffect } from "react";
// import LaunchCard from "./LaunchCard";


// const LaunchesList = ({ onSelectPokemon }) => {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPokemonData = async () => {
//       const response = await fetch(
//         "https://pokeapi.co/api/v2/pokemon?limit=151"
//       );
//       const data = await response.json();
//       setPokemonList(data.results);
//       setLoading(false);
//     };

//     fetchPokemonData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="pokemon-list pokemon-grid">
//       {pokemonList.map((pokemon, index) => (
//         <PokemonCard
//           key={index}
//           name={pokemon.name}
//           url={pokemon.url}
//           onSelect={onSelectPokemon}
//         />
//       ))}
//     </div>
//   );
// };

// export default PokemonList;