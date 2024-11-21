import React from "react";
import Css from './Bottom.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // For the envelope icon
import { faDiscord } from '@fortawesome/free-brands-svg-icons'; // For the Discord icon



const Bottom=()=>{
    return(
        <div className={Css.container}>
            <div className={Css.wrapper}>
                <div className={Css.content}>

                    <div className={Css.contentOne}>
                        <span>Seagull Development</span>
                    </div>

                    <ul className={Css.contentTwo}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Works</li>
                        <li>Testimonials</li>
                    </ul>
 
                    <div className={Css.contentThree}><FontAwesomeIcon icon={faEnvelope} />contact@seagulldev.net</div>

                    <div className={Css.contentFour}><FontAwesomeIcon icon={faDiscord} style={{ color: 'white' }}/>Our Discord</div>


                </div>



               <div className={Css.line}></div>

               <span className={Css.text}>© 2024 Seagull Development. All right reserved.</span>

            </div>
        </div>
    )
}
export default Bottom