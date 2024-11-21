import React, { useState } from "react"
import Css from './Accordian.module.css'
import { motion } from "framer-motion";

const Accordian =()=>{
  const data = [
    {
     
      name: 'What is included in your fullstack development service?',
      detail: 'Our fullstack development service covers the entire development process, from front-end development, back-end development, and API integration. We ensure your web application is both visually appealing and functionally robust.',
      
      
    },
    {
      
      name: 'What is your development process like?',
      detail: 'Our development process includes initial consultation, project planning, design, development, testing, and deployment. We keep you informed and involved at every stage to ensure the final product meets your expectations.',
     
    },
    {
     
      name: 'How do you handle payments and pricing?',
      detail:"We offer flexible pricing models depending on the project's scope and complexity. Payment can be made in milestones, with an initial deposit required to start, followed by scheduled payments upon reaching key milestones. "
    
      
      },
      {
     
        name: 'How long does it typically take to complete a project?',
        detail:"Project timelines vary based on complexity and requirements. A simple project might take a few weeks, while more complex solutions can take several months. We provide a detailed timeline after the initial consultation. "
      
        
        },
    
  ];
  const [selected,setSelected]=useState(null)

  const toggle=(i)=>{
      if (selected===i){
        setSelected(null)
      }
      setSelected(i)
  }
  return(
   <div className={Css.container}>
      <div className={Css.wrapper}>
        <motion.h1
          initial={{opacity: 0,
            y: -30, transition: {
              type: "spring",
              stiffness: 300,
              damping: 140,
            }}}
             whileInView={{opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 80,
                delay: 0.095,
              }
            }}
            viewport={{once:true}}
           
        >Frequently Asked Questions</motion.h1>
        <div className={Css.content}>
      {
          data.map((item, i) => (
            <motion.div 
            initial={{opacity: 0,
              y:-50, transition: {
                type: "spring",
                stiffness: 300,
                damping: 140,
              }}}
               whileInView={{opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 80,
                  delay: (i+1)*0.125,
                }
              }}
              viewport={{once:true}}
            className={Css.value} key={i}>
                <div className={Css.question} onClick={()=>{toggle(i)}} style={{ backgroundColor: selected === i ? '#0565ff' : 'white',color: selected === i ? 'white' : 'black' }}>
                  {item.name}
                </div>
                <div className={selected===i? Css.answer:Css.noshow}>
                  <span style={{color:'black',fontSize:"1rem",fontWeight:'100'}}>Answer</span>
                  {item.detail}
                </div>
            </motion.div>
          ))
        }
        </div>
      </div>

   </div>
  )
}
export default Accordian