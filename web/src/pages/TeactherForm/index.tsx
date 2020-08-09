import React, {useState, FormEvent} from 'react'
import PageHeader from '../../components/PageHeader'
import warningIcon from '../../assets/images/icons/warning.svg'
import Select from '../../components/Select'
import TextArea from '../../components/Textarea'
import {useHistory} from 'react-router-dom' 


import  './styles.css'
import Input from '../../components/Input'
import api from '../../services/api'

function TeatcherForm() {
    const history = useHistory(); 
    const [scheduleItems, setScheduleItems ] = useState([
        {week_day: 0 , from: '', to: ''}
    ]);
  
    const [name,setName] = useState('')
    const [avatar,setAvatar] = useState('')
    const [whatsapp,setWhatsapp] = useState('')
    const [subject,setSubject] = useState('')
    const [cost,setCost] = useState('')
    const [bio,setBio] = useState('')


    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
        const obj = 
        {
            name,
            avatar,
            whatsapp,
            subject,
            bio,
            cost: Number(cost),
            schedule: scheduleItems

        }
        api.post('classes',obj).then(()=> {
             alert('Sucess') 
            history.push('/')
            })
        .catch((err)=> {
             alert('Fail')
             console.log(obj)
        })
     


    }

    function setScheduleItemValue(postion: number,field: string, value: string) {
        const updateScheduleItems = scheduleItems.map(
            (scheduleItem,index)=> {
                if (index ===postion) {
                    return {...scheduleItem, [field]:value };
                }
                else{ return scheduleItem }
            }
        )
        setScheduleItems(updateScheduleItems)
    }


    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to:'' }]
            )
    } 
    
        return (
        <div id="page-teacher-form" className="container">
        <PageHeader title="Thank you for teach people"
        description="Register on Proffy"/>

        <main>
            <form onSubmit={handleCreateClass}>
            <fieldset>
                <legend> Your data</legend>
                 <Input name="name"
                  label="name" 
                  value={name}
                  onChange={(e)=>{setName(e.target.value) }}
                  />
                 <Input
                  name="avatar" 
                 label="avatar" 
                 value={avatar}
                 onChange={(e)=>{setAvatar(e.target.value) }}/>
                 <Input name="whatsapp"
                  label="whatsapp"
                  value={whatsapp}
                  onChange={(e)=>{setWhatsapp(e.target.value) }}
                  />
                  <TextArea name="textArea" label= "About You"
                    value={bio}
                    onChange={(e)=>{setBio(e.target.value) }}/>
                    
            </fieldset>

            <fieldset>
                <legend> About Classes </legend>
            
                 <Select name="subject" label="subject"
                 options={[
                     { value: 'Art'      , label: 'Art'       },
                     { value: 'Biology'  , label: 'Biology'   },
                     { value: 'Chemistry', label: 'Chemistry' },
                     { value: 'English'  , label: 'English'   },
                     { value: 'History'  , label: 'History'   },
                     { value: 'Math'     , label: 'Math'      }
                     

                 ]} 
                 value={subject}
                 onChange={(e)=>{ setSubject(e.target.value)}}
                 />
                 <Input name="cost" label="cost(Hour)"
                 value={cost}
                 onChange={(e)=>{ setCost(e.target.value)}}/>

                 <fieldset>
                     <legend> Hours
                         <button type="button" onClick={addNewScheduleItem}>+ New Hour </button>
                     </legend>

                 {scheduleItems.map( (scheduleItem,index) => {
                     return (
                         
                     <div key={scheduleItem.week_day} className="schedule-item">  
                     <Select name="week_day" label=""
                         options={[
                         { value: '0'  , label: 'Sunday'    },
                         { value: '1'  , label: 'Monday'    },
                         { value: '2'  , label: 'Tuesday'   },
                         { value: '3'  , label: 'Wednesday' },
                         { value: '4'  , label: 'Thursday'  },
                         { value: '5'  , label: 'Friday'    },
                         { value: '6'  , label: 'Saturday'  }
                     ]} 
                     onChange={e => setScheduleItemValue(
                         index,'week_day',e.target.value)}
                         value={scheduleItem.week_day}/>

                         <Input name="from" label=" "
                          type="time" 
                         onChange={e => setScheduleItemValue(
                             index,'from',e.target.value)}
                             value={scheduleItem.from}/>

                         <Input name="to"
                          label="" 
                          type="time" 
                          onChange={e => setScheduleItemValue(
                              index,'to',e.target.value)}
                              value={scheduleItem.to}/>
                 </div>
                     )
                 })}

                 </fieldset>
            </fieldset>

           

        <footer>
            <p>
                <img src={warningIcon} alt="warning"/>
                Warning<br/>
                You need to put all data
            </p>
            <button type="submit"> Save </button>
        </footer>
         </form >
        </main>
    </div>
    )
}

export default TeatcherForm;