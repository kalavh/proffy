import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem/indes';
import Input from '../../components/Input';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="They are our Teacther">
               <form id="search-teachers">
                 <Input name="subject" label="subject" />
                 <Input name="week_day" label="week day"/>
                 <Input name="time" label="time"/>
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