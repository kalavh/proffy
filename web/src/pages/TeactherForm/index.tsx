import React from 'react'
import PageHeader from '../../components/PageHeader'

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
        </main>
    </div>
    )
}

export default TeatcherForm;