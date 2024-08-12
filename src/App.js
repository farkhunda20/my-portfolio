import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
    </div>

    // <div className="App">
    //   <Navbar />
    //   <Routes>
    //     <Route path="/Home" element={<Home />}></Route>
    //     <Route path="/Skills" element={<Skills />}></Route>
    //     <Route path="/About" element={<About />}></Route>
    //     <Route path="/Projects" element={<Projects />}></Route>
    //   </Routes>
    // </div>
  );
}

export default App;
