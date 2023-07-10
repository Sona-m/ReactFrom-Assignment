import { Routes , Route } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import Education from './components/Education';
import Experience from './components/Experience'
import PreviewForm from "./components/PreviewForm";
import Navbar from "./components/Navbar";



const RoutesFile = () => {
  return (
    <Routes>
          
          <Route  exact path="/prev" element= {<PreviewForm/>} />
          <Route  path="/info" element={<PersonalInfo/>} />
          <Route exact path="/edu" element={<Education/>} />
          <Route exact path="/exp" element={<Experience/>} />
          
    </Routes>
  )
}

export default RoutesFile