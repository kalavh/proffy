import React, { useState,useEffect } from 'react';
import './styles.css'

import {Link} from 'react-router-dom'

import logoSvg from '../../assets/images/logo.svg'
import heroSvg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api';

function Landing () {

    const [totalConnections,setTotalConnections] = useState(0)
         
    useEffect(()=>{
        api.get('/connections')
        .then(res => { 
            const {total} = res.data;

            setTotalConnections(total)
        })
    },[])

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
                    
                    <Link to="/study" className="study">
                       <img src={studyIcon} alt="study Icon" />
                       Study
                   </Link>

                    <Link to="/give-classes" className="give-classes">
                       <img src={giveClassesIcon} alt="study Icon" />
                       Teach
                    </Link>
              
                </div>

                <span className="total-connections">
                    more than {totalConnections} connections 
                    <img src={purpleHeartIcon} alt="purple heart"/>
                </span>
            </div>
        </div>


    )
}

export default Landing;