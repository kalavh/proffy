import React from 'react';

import logoSvg from '../../assets/images/logo.svg'

function Landing () {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoSvg} alt="Proffy Logo" />

                </div>
            </div>
        </div>


    )
}

export default Landing;