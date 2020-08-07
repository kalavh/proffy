import React from 'react'
import PageHeader from '../../components/PageHeader'
import warningIcon from '../../assets/images/icons/warning.svg'

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
                 <Input name="subject" label="subject" />
                 <Input name="cost" label="cost"/>
            </fieldset>

            <textarea/>

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