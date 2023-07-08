import { Routes , Route } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import Education from './components/Education';
import Experience from './components/Experience'
import PreviewForm from "./components/PreviewForm";



const RoutesFile = () => {
  return (
    <Routes>
          <Route path="/prev" element= {<PreviewForm/>} />
          <Route  path="/info" element={<PersonalInfo/>} />
          <Route path="/edu" element={<Education/>} />
          <Route path="/exp" element={<Experience/>} />
        
    </Routes>
  )
}

export default RoutesFile