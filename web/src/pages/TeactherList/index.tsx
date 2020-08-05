import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem/indes';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="They are our Teacther">
               <form id="search-teachers">
                    <div className="input-block">
                        <label id="lsubject" htmlFor="subject">subjects</label>
                        <input type="text"  placeholder="Subject" id="subject"/>

                        <label id="lweek_day" htmlFor="week_day">Week Day</label>
                        <input type="text"  placeholder="Week Day" id="week_day"/>

                        <label id="ltime" htmlFor="time">time</label>
                        <input type="text"  placeholder="Time" id="time"/>
                    </div>
               </form>
            </PageHeader>
        <main>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
        </main>
          
        </div>
    )
}

export default TeacherList