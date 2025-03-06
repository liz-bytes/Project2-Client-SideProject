// import { useState, useEffect } from 'react';

//  // Custom hook to fetch and display SpaceX launches data

//  const UseFetch = (url) => {
//   const [data, setData] = useState([]); // state to hold fetched data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//      try {
//       const response = await fetch(url);
//       if (!response.ok) throw new Error(`Failed to fetch data! status: ${response.status}`);

//       const launches = await response.json();
//       setData(launches); // stores launches
//      } catch (error) {
//       setError(error.message);
//      } finally {
//       setLoading(false);
//      }
//     };

//     fetchData();
//     }, [url]);
//     return {data, loading, error };
//   };

//   export default UseFetch;