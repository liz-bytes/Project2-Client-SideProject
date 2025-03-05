// import { createContext, useState, useEffect } from "react";
// import useFetch from "../hooks/useFetch.js";

// const LaunchesContext = createContext();
//Global State for Launches


// import { createContext, useState } from "react";
// import useFetch from "../hooks/useFetch.js";

// export const LaunchesContext = createContext();

// export const LaunchesProvider = ({ children }) => {
//   const {data: launches, isLoading, error } = useFetch("https://api.spacexdata.com/v4/launches");
//   const [filteredLaunches, setFilteredLaunches] = useState([]);

//   return (
//     <LaunchesContext.Provider value={{ launches, isLoading, error, filteredLaunches, setFilteredLaunches }}>
//       {children}
//     </LaunchesContext.Provider>
//   );
// };

// Usage in other components
// import { createContext, useState, useEffect } from "react";
// import useFetch from "../hooks/useFetch.js";

// export const LaunchesContext = createContext();

// export const LaunchesProvider = ({ children }) => {
//   const { data: launches = [], isLoading, error } = useFetch("https://api.spacexdata.com/v4/launches");
//   const [filteredLaunches, setFilteredLaunches] = useState([]);

//   const VSFB_ID = "5e9e4502f5090995de566f86"; // Vandenberg SFB
//   const CCSFS_ID = "5e9e4502f509094188566f88"; // Cape Canaveral SFS

//   // Function to filter launches by location
//   const filterLaunches = (location) => {
//     if (!location) {
//       setFilteredLaunches([]);
//       return;
//     }

//     const filtered = launches.filter((launch) =>
//       location === "VSFB" ? launch.launchpad === VSFB_ID : launch.launchpad === CCSFS_ID
//     );

//     setFilteredLaunches(filtered);
//   };

//   return (
//     <LaunchesContext.Provider value={{ launches, filteredLaunches, filterLaunches, isLoading, error }}>
//       {children}
//     </LaunchesContext.Provider>
//   );
// };
import { createContext, useState, useEffect } from "react";

export const LaunchesContext = createContext();

export const LaunchesProvider = ({ children }) => {
  const API_URL = "https://api.spacexdata.com/v4/launches"; // Ensure the API URL is correct
  const [launches, setLaunches] = useState([]);
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setLaunches(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  //  Function to filter launches
  const filterLaunches = (location) => {
    if (!location) {
      setFilteredLaunches([]);
      return;
    }

    const VSFB_ID = `5e9e4502f5090995de566f86` && `5e9e4501f509094ba4566f84`;
    const CCSFS_ID = `5e9e4502f509094188566f88` && `5e9e4502f509092b78566f87`;

    const filtered = launches.filter((launch) =>
      location === "VSFB" ? launch.launchpad === VSFB_ID : launch.launchpad === CCSFS_ID
    );

    setFilteredLaunches(filtered);
  };

  return (
    <LaunchesContext.Provider value={{ launches, filteredLaunches, filterLaunches, isLoading, error }}>
      {children}
    </LaunchesContext.Provider>
  );
};
