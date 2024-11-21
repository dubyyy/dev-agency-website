import React from "react";
import Section from "./Components/Section/Section";
import Css from './App.module.css'
import Work from "./Components/Works/Works";
import Comments from "./Components/Comments/Comments";
import Bottom from "./Components/Bottom/Bottom";
import Accordian from "./Components/Accordian/Accordian";
import Contact from "./Components/Contact/Contact";



function App(){
  return(
  <div className={Css.container}>
    <Section />
    <Work />
    <Comments />
    <Accordian />
    <Contact />
    <Bottom />
   
  </div>
    
  )
}
export default App