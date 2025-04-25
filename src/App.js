import "./App.css";
import About from "./Components/loginsignup/About";
import Home from "./Components/loginsignup/Home";
import Contact from "./Components/loginsignup/Contact";
//import loginsignup from "./Components/loginsignup/loginsignup";
//import Loginsignup from "./Components/loginsignup/LoginSignUp";
import Navbar from "./Components/loginsignup/Navbar";
import Skills from "./Components/loginsignup/Skills";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Projects from "./Components/loginsignup/Projects";
import LoginSignUp from "./Components/loginsignup/LoginSignUp";
import UseReff from "./Components/loginsignup/UseReff";
import UseCllBack from "./Components/loginsignup/UseCllBack";
import UseMemo1 from "./Components/loginsignup/UseMemo1";
import Comp1 from "./Components/loginsignup/Comp1";
import UseCallBack from "./Components/loginsignup/UseCallBack";

function App() {
  return (
    // <>
    //   {/* <UseCllBack /> */}
    //   <UseCallBack />
    //   {/* <UseMemo1 />
    //   <UseCllBack />
    //   <LoginSignUp /> */}
    // </>
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
