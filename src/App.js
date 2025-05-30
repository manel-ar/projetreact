import React ,{useState}from "react";
import Home from "./components/Home";
import Contact from "./components/contact/Contact";
import Service from "./service";
import About from "./components/about/About";
import Calcul from "./components/calculmoyenne/Calcul";
import Use_hooks from "./Use_hooks";
import { EffectComponent } from "./EffectComponent";
import EffectWithParams from "./EffectWithParams";
import EffectCleanup from "./EffectCleanup";



function App() {
   const[show,setShow]=useState(true)
  return (
    <div className="App">
      <p> mon Projet creer avec react</p>
      <Home />
      <Service/>
      <Contact/>
      <About name={"manel"} age={"25"} email={"hello@gmail.com"}/>
      <Use_hooks/><br/>

      <Calcul module1={15} module2={6}/>
      {/* <EffectComponent/> */}
      <EffectWithParams/>
    
    <div>
    <button onClick={()=>setShow(prev=>!prev)}>
      {show ? "cacher" :'afficher'} le conteur
     </button>
    {show && <EffectCleanup/>}
    </div>
     
    </div>
  );
}

export default App;
