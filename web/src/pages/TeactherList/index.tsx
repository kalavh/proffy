import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'
function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="top-bar-container"> 
                    <Link to="/">
                        <img src={backIcon} alt="voltar"></img>
                    </Link>
                    <img src={logoImg} alt="proffy"/>
                </div>

                <div className="header-content">
                    <strong>They are our Teacther </strong>
                </div>
            </header>
           
        </div>
    )
}

export default TeacherList