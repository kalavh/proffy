import React from 'react'
import PageHeader from '../../components/PageHeader'

function TeatcherForm() {
    return (
        <div id="page-teacher-form" className="container">
        <PageHeader title="Thank you for teach people"
        description="Register on Proffy"/>

        <main>
            <fieldset>
                <legend> Your data</legend>
                    <div className="input-block">
                        <label htmlFor="name">Full Name</label>
                        <input type="text"  placeholder="name" id="name"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="avatar">Avatar Link</label>
                        <input type="text"  placeholder="avatar" id="avatar"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="whatsapp">whatsapp</label>
                        <input type="text"  placeholder="whatsapp" id="whatsapp"/>
                    </div>
                    
            </fieldset>
        </main>
    </div>
    )
}

export default TeatcherForm;