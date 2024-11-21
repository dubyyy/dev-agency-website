import React, { useState } from "react";
import Css from './Comments.module.css'
import star from '../../assets/stars.png'
import { motion } from "framer-motion";
const Comments =()=>{


    const datum = [
        {
          name: 'Michael G.',
          job: 'Discord Server Owner',
          comment: 'Seagul Development did an outstanding job creating a custom Discord bot for our community. Their team was professional, responsive, and delivered a bot that exceeded our expectations. Our server engagement has skyrocketed thanks to their innovative solutions!',

        },
        {
          
          name: 'Lisa K.',
          job: 'Minecraft Server Owner',
          comment: 'We needed a unique plugin for our Minecraft server, and Seagul Development delivered beyond our expectations. The new gameplay mechanics have really engaged our players, and the plugin runs flawlessly. Their team was professional and responsive throughout the project.',
          },
        {
          name: 'Product Manager',
          job: 'Tech Innovators Inc.',
          comment: "Seagul Development's fullstack team built a fantastic web application for us. From the initial design to the final deployment, their process was smooth and transparent. The end product is exactly what we envisioned and works perfectly.",
          }
        
      ];

      const [value, setValue]=useState(0);
        const next =()=>{
            if (value===0){
                setValue(value +1)
            }else if (value===1){
                setValue(value +1)
            }else if (value===2){
                setValue(0)
            }
            
        }


        const Previous =()=>{
            if (value===0){
                setValue(2)
            }else if (value===1){
                setValue(0)
            }else if (value===2){
                setValue(1)
            }
            
        }


    return(
        
        <div className={Css.container}>
            <div className={Css.wrapper}>
                <motion.img src={star} alt="" 
                  
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
                
                ></motion.img>
                
            <motion.div className={Css.detail}
            
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
                    delay: 0.35,
                  }
                }}
                viewport={{once:true}}
            >
                <span>{datum[value].comment}</span>
            </motion.div>
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
                    delay: 0.4,
                  }
                }}
                viewport={{once:true}}
            className={Css.info}>
                <span>{datum[value].name}</span>
                <span>{datum[value].job}</span>
            </motion.div>

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
                    delay: 0.45,
                  }
                }}
                viewport={{once:true}}
            
            className={Css.function}>
                <button onClick={()=>{Previous()}}>Prev</button>
                <button onClick={()=>{next()}}>Next</button>
            </motion.div>
            

            </div>
        </div>
    )
}
export default Comments