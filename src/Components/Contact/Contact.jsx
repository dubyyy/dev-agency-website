import React from "react";
import Css from './Contact.module.css'

const Contact =()=>{
    return(
     <section className={Css.contact}>
        <div className={Css.intro}>
            <span>Ready to Work with Us?</span>
            
            
            <span>Let’s start by filling in
            the form below</span>
        </div>
        <form>
            
            <div className={Css.inputBox}>
                <label>Name</label>
                <input type="text" className={Css.field} placeholder="John Doe"/>

            </div>

            <div className={Css.inputBox}>
                <label>Email</label>
                <input type="email" className={Css.field} placeholder="johnDoe@gmail.com" />



            </div>

            <div className={Css.inputBox}>
                <label>Tell us more about the project</label>
                <textarea name="" id="" placeholder="Describe your goal,services needed,deadline,etc..." className={`${Css.field} ${Css.mess}`}></textarea>

            </div>
            <button type="submit" className={Css.fieldMessage}>Send messages</button>

        </form>
     </section>
    )
}
export default Contact