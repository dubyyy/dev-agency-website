import React, {useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";
import Css from './Header.module.scss'
import  seagull from '../../assets/sea.png'
const Header =()=>{

    const [open, setOpen] = useState(false);

  const isOpen = ()=>{
    setOpen(true);
  }

  const closeMenu = ()=>{
    setOpen(false);
  }

  //lets start animation
  const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        delay:1.2
      }
    }
  }

    return(
        <div 
       
        className={Css.container}>
        <header>
        <div className={Css.hecontent}>
          <img src={seagull} alt="" />
          <span>Seagull Development</span>
        </div>  

          <div className={Css.menu} onClick={isOpen}>
            <div className={Css.flx}>
          <div className={Css.iconcontainer}>
             <i className="fa fa-bars"></i>
          </div>
          </div>
          
          </div>     
        </header>
        <AnimatePresence>
          {
            open &&(
              <motion.div className={Css.menu_container}
                variants={item}
                initial={{height:0,opacity:0}}
                animate={{height:"100vh", opacity:1}}
                transition={{duration:.5}}
                exit="exit"
              >
                <div className={Css.btn_close} onClick={closeMenu}>X</div>
                <motion.a onClick={()=>{closeMenu()}} href=""

                   initial={{y:80,opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{delay:.8}}
                   exit={{
                    opacity:0,
                    y:90,
                      transition:{
                        ease:"easeInOut",
                        delay:1
                      }
                   }}
                >Home</motion.a>
                <motion.a 
                   initial={{y:80,opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{delay:.7}}
                   exit={{
                    opacity:0,
                    y:90,
                      transition:{
                        ease:"easeInOut",
                        delay:.8
                      }
                   }}
                   onClick={()=>{closeMenu()}}
                >About</motion.a>
                <motion.a onClick={()=>{closeMenu()}}
                   initial={{y:80,opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{delay:.6}}
                   exit={{
                    opacity:0,
                    y:90,
                      transition:{
                        ease:"easeInOut",
                        delay:.6
                      }
                   }}
                >Portfolio</motion.a>
                <motion.a onClick={()=>{closeMenu()}}
                   initial={{y:80,opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{delay:.5}}
                   exit={{
                    opacity:0,
                    y:90,
                      transition:{
                        ease:"easeInOut",
                        delay:.4
                      }
                   }}
                >Blog</motion.a>
                <motion.a onClick={()=>{closeMenu()}}
                   initial={{y:80,opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{delay:.4}}
                   exit={{
                    opacity:0,
                    y:90,
                      transition:{
                        ease:"easeInOut",
                        delay:.2
                      }
                   }}
                >Contact</motion.a>
              </motion.div>
            )
          }    
        </AnimatePresence>  
        </div>
      
    
    )
}
export default Header






