import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
import PageHeader from '../../components/PageHeader';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="They are our Teacther">
               <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">subjects</label>
                        <input type="text" id="subject"/>

                        <label htmlFor="week_day">Week Day</label>
                        <input type="text" id="week_day"/>

                        <label htmlFor="time">time</label>
                        <input type="text" id="time"/>
                    </div>
               </form>
            </PageHeader>
        </div>
    )
}

export default TeacherList