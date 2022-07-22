import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./component/about/About";
import Contact from "./component/Contact/Contact";
import Works from "./component/works/Works";
import Home from "./pages/home/Home";
import ClickCare from "./pages/projects/clickCare/ClickCare";
import Setting from "./Setting";


const App = () => {
  
  return (
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<Works/>}/>
      <Route path="/projects/clickcare" element={<ClickCare/>}/>
      <Route path="/setting" element={<Setting/>}/>
    </Routes>
  );
};

export default App;
