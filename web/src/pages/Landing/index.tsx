import React from 'react';
import './styles.css'

import logoSvg from '../../assets/images/logo.svg'
import heroSvg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

function Landing () {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoSvg} alt="Proffy Logo" />
                    <h2> Your Study Website</h2>
                </div>

                <img
                 src={heroSvg}  alt="Image plataform" className="hero-image"/>
                
                <div className="buttons-container">
                    
                    <a href="" className="study">
                       <img src={studyIcon} alt="study Icon" />
                       Study
                   </a>

                    <a href="" className="give-classes">
                       <img src={giveClassesIcon} alt="study Icon" />
                       Teach
                    </a>
              
                </div>

                <span className="total-connections">
                    more than 200 connections 
                    <img src={purpleHeartIcon} alt="purple heart"/>
                </span>
            </div>
        </div>


    )
}

export default Landing;