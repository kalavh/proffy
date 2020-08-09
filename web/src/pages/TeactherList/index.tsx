import React,{useState, FormEvent} from 'react';
import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem,{ Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';



 function TeacherList() {
    const [ teachers, setTeacher ] = useState([])
    const [ subject, setSubject ] = useState('')
    const [ week_day, setWeek_day ] = useState('')
    const [ time, setTime ] = useState('')
    
    async function searchTeachers(ev: FormEvent) {
        ev.preventDefault();
        const res = await api.get('classes', {
            params: { 
                subject,
                week_day,
                time}
            }
           
        )
        setTeacher(res.data)
    }


    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="They are our Teacther">
               <form id="search-teachers" onSubmit={searchTeachers}>
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
                    onChange={ (ev) => { setSubject(ev.target.value) } }
                    />

                     <Select name="week_day" label="week"
                    options={[
                        { value: '0'  , label: 'Sunday'    },
                        { value: '1'  , label: 'Monday'    },
                        { value: '2'  , label: 'Tuesday'   },
                        { value: '3'  , label: 'Wednesday' },
                        { value: '4'  , label: 'Thursday'  },
                        { value: '5'  , label: 'Friday'    },
                        { value: '6'  , label: 'Saturday'  }
                    ]} 
                    value={week_day}
                      onChange={ (ev)=> { setWeek_day(ev.target.value) }}
                      />
                    <Input type="time"name="time" label="time"
                      value={time}
                      onChange={(ev) => { setTime(ev.target.value) }}/>
                      <button id="search" type="submit">Search </button>
               </form>
            </PageHeader>
        <main>
            {teachers.map((teacher: Teacher) => {
                return <TeacherItem key={teacher.id} teacher={teacher} />
            }) }

        </main>
          
        </div>
    )
}

export default TeacherList