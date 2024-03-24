import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Accomplishments } from "./components/Accomplishments"; // Import the Accomplishments component
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills/> 
      <Accomplishments/>{/* Add the Accomplishments component */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
