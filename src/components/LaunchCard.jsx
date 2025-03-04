



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