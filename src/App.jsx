import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { LaunchesProvider } from "./context/LaunchesContext";
import LaunchPage from "./pages/LaunchPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Favorites from "./components/Favorites";
//import LaunchesList from "./components/LaunchesList";

function App() {
  return (
    <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Launches" element={<LaunchPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </Router>
  );
}

export default App;


// //useEffect to resize the window
// export default function App(){
//   const[windowWidth, setWindowWidth] = useState(window.innerWidth)
//   const [windowHeight, setWindowHeight] = useState(window.innerHeight)

//   const handleWidthResize=() =>{
//     setWindowWidth(window.innerWidth)
//   }
//   const handleHeightResize=() =>{
//     setWindowHeight(window.innerHeight)
//   }
//   useEffect(() => {
//     window.addEventListener('resize', handleWidthResize)
//     return () => {
//       window.removeEventListener('resize', handleWidthResize)
//       //cleanup function, this will run when the component is unmounted
//       //or when the component is re-rendered.This prevents memory leaks
//     }
//   },[])// empty array means it will run only once when the component is mounted
//   useEffect(()=>{
//     window.addEventListener('resize', handleHeightResize)
//     return () => {
//       window.removeEventListener('resize', handleHeightResize)
//     }
//   },[])
//   return(
//     <div>{windowWidth} Width
//       <div>{windowHeight} Height</div>
//     </div>
//   )
// }