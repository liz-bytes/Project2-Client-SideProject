import { createContext, useState, useEffect } from "react";

export const LaunchesContext = createContext();

export const LaunchesProvider = ({ children }) => {
  const API_URL = "https://api.spacexdata.com/v4/launches";
  const [launches, setLaunches] = useState([]);
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [serachMonth, setSearchMonth] = useState("");
  // const [searchYear, setSearchYear] = useState("");

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


  const filterLaunches = (location) => {
    if (!location) {
      setFilteredLaunches([]);
      return;
    }

    const VSFB_IDS = [`5e9e4502f5090995de566f86`, `5e9e4501f509094ba4566f84`];
    const CCSFS_IDS = [`5e9e4502f509094188566f88`, `5e9e4502f509092b78566f87`];

    const filtered = launches.filter((launch) =>
      location === "VSFB"
        ? VSFB_IDS.includes(launch.launchpad)
        : CCSFS_IDS.includes(launch.launchpad)
    );

    setFilteredLaunches(filtered);
  };

  return (
    <LaunchesContext.Provider value={{ launches, filteredLaunches, filterLaunches, isLoading, error }}>
      {children}
    </LaunchesContext.Provider>
  );
};
