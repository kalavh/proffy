import React from 'react'
import PageHeader from '../../components/PageHeader'
import warningIcon from '../../assets/images/icons/warning.svg'
import Select from '../../components/Select'

import  './styles.css'
import Input from '../../components/Input'

function TeatcherForm() {
    return (
        <div id="page-teacher-form" className="container">
        <PageHeader title="Thank you for teach people"
        description="Register on Proffy"/>

        <main>
            <fieldset>
                <legend> Your data</legend>
                 <Input name="name" label="name" />
                 <Input name="avatar" label="avatar"/>
                 <Input name="whatsapp" label="whatsapp"/>
                    
            </fieldset>

            <fieldset>
                <legend> About Classes </legend>
            
                 <Select name="subject" label="subject"
                 options={[
                     {value: 'Art', label: 'Art'},
                     {value: 'Biology', label: 'Biology'},
                     {value: 'Chemistry', label: 'Chemistry'},
                     {value: 'English', label: 'English'},
                     {value: 'History', label: 'History'},
                     {value: 'Math', label: 'Math'}
                     

                 ]} />
                 <Input name="cost" label="cost"/>
            </fieldset>

           

        <footer>
            <p>
                <img src={warningIcon} alt="warning"/>
                Warning<br/>
                You need to put all data
            </p>
            <button type="button"> Save </button>
        </footer>

        </main>
    </div>
    )
}

export default TeatcherForm;