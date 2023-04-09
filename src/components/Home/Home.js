import React from 'react'
import "./home_style.css"
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';



export default function Home() {
  return (
    <div className='home'>
        <div className="header">
          <div className="first_inner_div">

            <h1 className="first_dynamic_text">

                <Typewriter
                onInit={(typewriter)=> {
                    setInterval(() => {
                        typewriter            
                        .typeString("Support")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Collaborate On")
                        .pauseFor(1000)
                        .deleteAll()
                        
                        .start();
                        
                    }, 1000);
                }}
                />
            </h1>
       <h1 className="first_main_text">Great Hardware Hacks</h1>
            </div>
            <a href="#answer" className='go'>Lets Do It</a>
        </div>
        <div className="why">
          <h1>Why To Be A Hardware Hero ?</h1>
          <div className="answer" id="answer">
            <div className="answer_img"></div>
            <p className="answer_text">There are many people in this world with many hardware related brilliant idea but due to lack of resources they are not able to work on them. So via our platform you can find those people who can support your idea and can even collborate with you ! If you have resources you can support and collaborate with others as well.</p>
          </div>
        </div>
    </div>
  )
}
