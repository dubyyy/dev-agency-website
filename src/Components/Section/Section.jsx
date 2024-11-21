import React from "react";
import Css from './Section.module.css'
import myImage from '../../assets/6bxpak3JX0MZhOpUkjbdADXpmKw.png';
import Header from "./Header";
import {motion} from "framer-motion";


const Section =()=>{
    const divStyle = {
        width: '100%',
        
        
        backgroundImage: `url(${myImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0565ff',
  
    
       

      };

    return(
      <div className={Css.con}>
        
      <div style={divStyle} className={Css.backgroundDiv}>
      
        <Header />
        
      


      <div className={Css.content}>
        <motion.div 
        initial={{opacity: 0,
           y: -100, transition: {
             type: "spring",
             stiffness: 300,
             damping: 140,
           }}}
            whileInView={{opacity: 1,
             y: 0,
             transition: {
               type: "spring",
               stiffness: 80,
               delay: .3,
             }
           }}
           viewport={{once:true}}
        className={Css.contentHeader}>
        <p>From Code to Community, We Build It All</p>
        </motion.div>
        <motion.div className={Css.contentText} 
          initial={{opacity: 0,
            y: -100, transition: {
              type: "spring",
              stiffness: 300,
              damping: 140,
            }}}
             whileInView={{opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 80,
                delay: .5,
              }
            }}
            viewport={{once:true}}
        >
        <p>Your go-to for innovative Websites, Discord bots
        and <a href="#">more</a>.</p>
        </motion.div>
        
        <motion.button
        initial={{opacity: 0,
          y: -100, transition: {
            type: "spring",
            stiffness: 300,
            damping: 140,
          }}}
           whileInView={{opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 80,
              delay: .7,
            }
          }}
         
          viewport={{once:true}}
        >Build With Us Now</motion.button>
      </div>
    </div>
    </div>
    )
}
export default Section