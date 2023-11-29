import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Portofolio from "./component/Portofolio";
import SocialLink from "./component/SocialLink";
import TechnicalSkill from "./component/TechnicalSkill";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <SocialLink/>
      <About/>
      <Portofolio/>
      <Experience/>      
      <TechnicalSkill/>
      <Contact/>
    </div>
  );
}

export default App;
