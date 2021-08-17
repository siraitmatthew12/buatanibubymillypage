import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom';


function Hero() {
    return(
        <div className="background">
            <div className="herocontainer">
                <h1>Our Official Website</h1>
                <h2>Start scrolling for your personal experience and more knowledge about our cake</h2>
                <p>Or straightly click the button below for ordering</p>
                <Link to="/Contact"><a className="button" href="">Contact</a></Link>
            </div>
            <div className="pic">
                <img src="images/cakelogowh.png" alt="" />
            </div>
        </div> 
    )
}

export default Hero
