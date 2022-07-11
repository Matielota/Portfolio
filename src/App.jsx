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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<Works/>}/>
      <Route path="/clickcare" element={<ClickCare/>}/>
    </Routes>
  );
};

export default App;
