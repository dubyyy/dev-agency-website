import React from "react";
import Css from './Works.module.css';
import img1 from '../../assets/kNS0s5UqsNaOoNFrsR76Ypw3A.png';
import img2 from '../../assets/8tUJDeTiYMxmADKKBUkzTbaaZA8.png';
import img3 from '../../assets/8luXQZ5oOt9k17Vuk1MCT4jMUc.png';
import img4 from '../../assets/tgEG7ICK6s9g7Qe7fgj05qrbQ.png';
import img5 from '../../assets/K290MSQjldbf4EFHWfJqabhSzO4.png';
import img6 from '../../assets/kOHYN4RYT0YPRFk1rZn41jdSfU.png';
import img7 from '../../assets/jVJ3aOJEcEWVEvdJBWGwHV7Cd8.png';
import img8 from '../../assets/K290MSQjldbf4EFHWfJqabhSzO4.png';
import {motion} from "framer-motion";

const Work = () => {
  const data = [
    {
      img: img1, // Correct reference
      name: 'Desktop Application',
      detail: 'Efficient, user-friendly desktop software tailored to your needs',
      extra: 'Cross-Platform Development, Performance Optimization, System Integration',
      style:{
        width: '21.875rem',
        height: '24.125rem',
      },
    },
    {
      img: img2, // Correct reference
      name: 'Discord Bots',
      detail: 'Custom bots to automate tasks and engage your Discord communities',
      extra: 'Automated Moderation, Custom Commands, Event Management',
      style:{
        width: '21.875rem',
        height: '24.125rem',
      },
    },
    {
      img: img3,
      name: 'Minecraft Plugins',
      detail: 'Unique plugins to enhance and customize your Minecraft server',
      extra: 'Gameplay Enhancements, Custom Commands, Security Plugins',
      style:{
        width: '21.875rem',
        height: '24.125rem',
      },
    },
    {
      img: img4,
      name: 'Core Bot',
      detail: 'A Discord Bot with a strong focus on accessibility and ease-of-use, without neglecting the functionality.',
      extra: 'Moderation, Tickets & Statistics',
      style:{
        width: '21.875rem',
        height: '16.3125rem',
      },
    },
    {
      img: img5,
      name: 'Hub Core Lite',
      detail: 'A high-performance & minimalistic, yet extremely powerful Minecraft Plugin to take your Network to the next Level.',
      extra: 'Written in Java using the Bukkit API',
      style:{
        width: '21.875rem',
        height: '16.3125rem',
      },
    },
    {
      img: img6,
      name: 'SyncTask',
      detail: 'A high-level task-management and scheduling platform with a focus on implementing collaborative features, making it ideal for teams.',
      extra: ' ',
      style:{
        width: '21.875rem',
        height: '16.3125rem',
      },
    },
    {
      img: img7,
      name: 'S-Bot',
      detail: 'A smoothly integrated Support Agent, running multiple flagship AI models to provide customers the support they deserve.',
      extra: ' ',
      style:{
        width: '21.875rem',
        height: '16.3125rem',
      },
    }
  ];

  return (
    <div className={Css.container}>
      <div className={Css.work}>
        {
          data.map((item, i) => (
            <motion.div className={Css.box} key={i}
            initial={{opacity: 0,
              x: -100, transition: {
                type: "spring",
                stiffness: 300,
                damping: 140,
              }}}
               whileInView={{opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 80,
                  delay: (i+1)*0.1,
                }
              }}
              viewport={{once:true}}
            
            >
              <button>Build yours now</button>
              <span>View works</span>
              <img src={item.img} alt={item.name} style={item.style}/> {/* Corrected image reference */}
              <div className={Css.info}>
                <span>{item.name}</span>
                <div className={Css.item}>
                      <span style={{ fontSize: '0.8rem',maxWidth:'10rem' }}>{item.detail}</span>
                      <span style={{ fontSize: '0.8rem',maxWidth:'10rem',color:'#0565ff' }}>{item.extra}</span>


                </div>
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  );
}

export default Work;
