import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Launches from "./pages/LaunchList";


// - Welcome Page with how to search for launches
// - Search bar to filter launches.
//     - We want to search by two locations: Vandy and Capes to display five launches
//launchpad  https://api.spacexdata.com/v4/launchpads/5e9e4502f509094188566f88

function App() {
  // const [fetchLaunches, setFetchLaunches] = useState([]);
  // useEffect(()=>{
  //   fetch('https://api.spacexdata.com/v5/launches/latest')
  //     .then(res => res.json())
  //     .then(data => {
  //       setFetchLaunches(data)
  //       console.log(data.launchpad)
  //         // console.log(data.launchpad.name)
  //     })
  //     .catch(error => console.error('Error fetching data:', error)) //handles errors
 
  // },[])

  return (
    <>
    <div className='container'>
      <Navbar/>
    </div>
      <h1>SpaceXplorer</h1>
      <h2>Search by location: Vanderberg AFB or Cape Canaveral</h2>
      <Home/> 
    </>
  )
}

export default App
