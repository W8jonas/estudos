import React, { useState, FormEvent } from 'react'

// assets
import './styles.css'


// Components
import PageHeader from '../../components/PageHeader'
import TeacherItem, {Teacher} from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

// Functions
import {subjectOptions, weekDayOptions} from '../../extras/index'
import api from '../../services/api'


function TeacherList() {

    const [subject, setSubject] = useState('')
    const [week_day, setWeek_day] = useState('')
    const [time, setTime] = useState('')

    const [teachers, setTeachers] = useState([])

    async function handleSubmit(event: FormEvent){
        event.preventDefault()
        const response = await api.get('classes', {
            params: {
                subject, 
                week_day,
                time
            }
        })
        setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                
                <form id="search-teachers" onSubmit={handleSubmit}>
                    <Select
                        name="subject"
                        label="Matéria"
                        options={subjectOptions}
                        value={subject}
                        onChange={(e)=> setSubject(e.target.value)}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        options={weekDayOptions}
                        value={week_day}
                        onChange={(e)=> setWeek_day(e.target.value)}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e)=> setTime(e.target.value)}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>

            </PageHeader>

            <main>
                {teachers.map((teacher:Teacher)=>(
                    <TeacherItem key={teacher.id} teacher={teacher}/>
                ))}
            </main>

        </div>
    )
}

export default TeacherList