import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import Advertising from "./components/Advertising/Advertising";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Vacant from "./components/Vacant/Vacant";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import User from "./components/User/User";
import Advertisements from "./components/Advertisements/Advertisements";
import Announcement from "./components/Announcement/Announcement";
import Cv from "./components/CV/Cv";
import Selects from "./components/Selects/Selects";
import Packages from "./components/Packages/Packages";
import Holding from "./components/Holding/Holding";
import ReadyAds from "./components/Advertisements/ReadyAds";
import ReadyCV from "./components/RightCv/ReadyCV";
import ReadySelect from "./components/RightSelects.js/ReadySelect";
import ReadyHolding from "./components/RightHolding/ReadyHolding";
import ReadyPackages from "./components/RightPackages/ReadyPackages";
import CVCommon from "./components/CV/CVCommon";


function App() {
  return (
    <div className="">
      <Advertising />
      <Router>
      <Header />
        <Routes>
          <Route  path="/Vacant" element={<Vacant/>} />
          <Route path="/User" element={<User/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/Announcement" element={<Announcement/>} />
          <Route path="/Cv" element={<Cv/>} /> 
          <Route path="CVCommon" element={<CVCommon/>}/>
          <Route path="/Selects" element={<Selects/>} />
          <Route path="/Packages" element={<Packages/>} />
          <Route path="/Holding" element={<Holding/>} />
          <Route path="/ReadyAds" element={<ReadyAds/>} />
          <Route path="/ReadyCV" element={<ReadyCV/>} />
          <Route path="/ReadySelect" element={<ReadySelect/>} />
          <Route path="/ReadyHolding" element={<ReadyHolding/>} />
          <Route path="/ReadyPackages" element={<ReadyPackages/>} />
          {/* <Route path="/User/Advertisements" element={<Advertisements/>}/> */}
        </Routes>
      </Router>
      
      
     
      <Footer />
    </div>
  );
}

export default App;
